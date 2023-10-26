import { useState, useEffect } from "react"
import { useParams, useOutletContext, Link, useNavigate } from "react-router-dom"
import { API_BASE } from "../constants"
import ShotTable from "../components/ShotTable"
import getShootStatus from "../utils/getShootStatus"

const ShootDetails = () => {
  const { user, setMessages } = useOutletContext()
  const shootId = useParams().id
  const navigate = useNavigate()
  const [shoot, setShoot] = useState(undefined)
  const [items, setItems] = useState([])
  const [shots, setShots] = useState([])
  const [shootStatus, setShootStatus] = useState('')
  const [shotCount, setShotCount] = useState(0)

  useEffect(() => {
    fetch(`${API_BASE}/api/shoots/${shootId}`)
      .then(res => res.json())
      .then(({ shoot, items, shots, shootDetails }) => {
        shootDetails[0].status = getShootStatus(shootDetails[0])
        setShoot(shootDetails[0])
        setItems(items)
        setShots(shootDetails[0].shotList)
        setShootStatus(shootDetails[0].status)
        setShotCount(shootDetails[0].shotCount)
      })    
  }, [setShoot, shootId])

  if (!user) return null

  if (shoot === undefined) return <h1>Loading...</h1>
  else if (shoot === null) return <h1>Shoot not found</h1>

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = e.currentTarget
    const response = await fetch(API_BASE + form.getAttribute('action'), {
      method: form.method,
      body: new FormData(form),
      credentials: 'include'
    })
    const json = await response.json()
    if (json.messages) setMessages(json.messages)
    if (json.shot) {
      setShots([...shots, json.shot])
      setShotCount(shotCount + 1)
      setShootStatus(getShootStatus({...shoot, shotList: [...shots, json.shot]}))
    }
    form.reset()
  }

  const handleCheck = async (e) => {
    e.preventDefault()
    const form = e.currentTarget.form
    const response = await fetch(API_BASE + form.getAttribute('action'), {
      method: form.method,
      credentials: 'include'
    })
    const json = await response.json()
    if (json.shot) {
      setShots(shots.map(shot => shot._id === json.shot._id ? {...shot, completed: !shot.completed} : shot))
      setShootStatus(getShootStatus({...shoot, shotList: shots.map(shot => shot._id === json.shot._id ? {...shot, completed: !shot.completed} : shot)}))
    }
  }

  const handleDeleteShot = async (e) => {
    e.preventDefault()
    const form = e.currentTarget
    const response = await fetch(API_BASE + form.getAttribute('action'), {
      method: form.method,
      credentials: 'include'
    })
    const json = await response.json()
    if (json.shot) {
      setShots(shots.filter(shot => shot._id !== json.shot._id))
      setShotCount(shotCount - 1)
      setShootStatus(getShootStatus({...shoot, shotList: shots.filter(shot => shot._id !== json.shot._id)}))
    }
  }

  const handleDeleteShoot = async (e) => {
    e.preventDefault()
    const form = e.currentTarget
    const response = await fetch(API_BASE + form.getAttribute('action'), {
      method: form.method,
      credentials: 'include'
    })
    const json = await response.json()
    if (json.shoot) {
      navigate(-1)
    }
  }

  return (
    <main className="flex flex-col items-start w-full">
      <div className="hidden mb-2 ml-1 text-sm breadcrumbs lg:inline-block ">
        <ul>
          <li><Link to="/app">Dashboard</Link></li> 
          <li><Link to="/app/shoots">Shoots</Link></li>
          <li>Shoot Details - {shoot.shootName}</li>
        </ul>
      </div>
      <h1 className="w-full ml-1 text-3xl font-bold ">{ shoot.shootName } </h1>

      <table className="ml-1">
        <thead>
          <tr>
            <th className="pl-0 p-2 text-xs font-normal tracking-wide uppercase text-[#656565] text-left align-middle">
              Status
            </th>
            <th className="pl-4 p-2 text-xs font-normal tracking-wide uppercase text-[#656565] text-left align-middle">
              Content Type
            </th>
            <th className="pl-4 p-2 text-xs font-normal tracking-wide uppercase text-[#656565] text-left align-middle">
              Date(s)
            </th>
            <th className="pl-4 p-2 text-xs font-normal tracking-wide uppercase text-[#656565] text-left align-middle">
              Shot Count
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="pr-2 align-top">
              <span className={ shootStatus.toLowerCase().split(" ").join("") }>{ shootStatus }</span>
            </td>
            <td className="pl-4 pr-2 align-top">
              <span className="font-medium tracking-wide text-gray-900 sm:text-base lg:text-lg">{shoot.contentType}</span>
            </td>
            <td className="pl-4 pr-2 align-top">
              <span className="text-xs tracking-wide text-gray-900 font-xs md:text-sm">{new Date(shoot.startDate).toLocaleDateString([], { month: 'short', day: '2-digit', timeZone: 'UTC' })}{new Date(shoot.endDate) - new Date(shoot.startDate) > 0 ? ` - ${new Date(shoot.endDate).toLocaleDateString([], { month: 'short', day: '2-digit', year: 'numeric', timeZone: 'UTC' })}` : `, ${new Date(shoot.startDate).toLocaleDateString([], { year: 'numeric', timeZone: 'UTC' })}`}</span>
            </td>
            <td className="pl-4 pr-2 align-top">
              <span className="font-medium tracking-wide text-gray-900 sm:text-base lg:text-lg">{shotCount}</span>
            </td>
          </tr>
        </tbody>
      </table>
              
      <form 
        className="my-8 ml-1"
        action={`/api/shots/createShot/${shoot._id}`}
        encType="multipart/form-data"
        method="POST"
        onSubmit={handleSubmit}>
            <label className="block mb-2 text-xs tracking-wide uppercase" htmlFor="item">Add an item this Shoot</label>
                <div className="form-control">
                    <div className="input-group">
                        <select className="pl-2 text-base font-medium tracking-wide bg-gray-100 selselect-bordered focus:outline-none" id="item" name="item">
                          {items.map( e => (
                            <option value={`${e._id}`} key={e._id}>{e.sku}</option>
                          ))}
                        </select>
                        <button type="submit" className="bg-black btn">Add Shot</button>
                    </div>
                </div>
      </form>

      <label htmlFor="delete-modal" className="mb-6 ml-1 text-xs uppercase cursor-pointer text-rose-600">Delete Shoot</label>
      <input type="checkbox" id="delete-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="flex flex-col gap-4 py-12 modal-box">
          <h3 className="text-lg font-bold text-center">Are you sure?</h3>
          <div className="flex justify-center gap-4">
            <label htmlFor="delete-modal" className="tracking-wider text-black bg-transparent border-2 border-[#e5e7eb] btn">Cancel</label>
            <form
            action={`/api/shoots/deleteShoot/${shoot._id}?_method=DELETE`}
            method="POST"
            onSubmit={handleDeleteShoot}
            className="mb-4"
            >
              <button type="submit" className= "tracking-wider text-white uppercase bg-rose-600 border-rose-600 btn">Yes, delete Shoot</button>
            </form>
          </div>
        </div>
      </div>

      <h2 className="w-full mb-6 ml-1 text-lg font-medium">Shot List</h2>
      <ShotTable shots={shots} handleCheck={handleCheck} handleDeleteShot={handleDeleteShot} />
    </main>
  )
}

export default ShootDetails