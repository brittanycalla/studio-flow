import { useState, useEffect } from "react"
import { useOutletContext, Link } from "react-router-dom"
import ShootTable from "../components/ShootTable"
import getShootStatus from "../utils/getShootStatus"

const Shoots = () => {
  const { user, setMessages } = useOutletContext()
  const [shoots, setShoots] = useState([])

  useEffect(() => {
    fetch('/api/shoots')
      .then(res => res.json())
      .then(data => {
        data.shoots.forEach(shoot => shoot.status = getShootStatus(shoot))
        setShoots(data.shoots)
      })
  }, [])

  if (!user) return null

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = e.currentTarget
    const response = await fetch(form.action, {
      method: form.method,
      body: new FormData(form),
    })
    const json = await response.json()
    if (json.messages) setMessages(json.messages)
    // if (json.shoot) setShoots([...shoots, {...json.shoot, shotList: []}])
    if (json.shoot) setShoots([...shoots, {...json.shoot, status: getShootStatus(json.shoot), shotCount: 0}])
    form.reset()
  }

  const handleDelete = async (e) => {
    e.preventDefault()
    const form = e.currentTarget
    const response = await fetch(form.action, {
      method: form.method
    })
    const json = await response.json()
    if (json.shoot) setShoots(shoots.filter(shoot => shoot._id !== json.shoot._id))
  }

  return (
    <main className="flex flex-col items-start w-full">
      <div className="hidden mb-2 ml-1 text-sm breadcrumbs lg:inline-block">
        <ul>
          <li>
            <Link to="/app">Dashboard</Link>
          </li>
          <li>Shoots</li>
        </ul>
      </div>
      <h1 className="w-full ml-1 text-3xl font-bold">Shoots</h1>
      <div className="ml-1 collapse collapse-arrow">
        <input type="checkbox" />
        <div className="px-0 text-xl font-medium collapse-title">
          <h2>Add a Shoot</h2>
        </div>
        <div className="collapse-content">
          <form
            className="w-full max-w-4xl"
            action="/api/shoots/createShoot"
            encType="multipart/ form-data"
            method="POST"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-wrap mb-6">
              <div className="w-full mb-6">
                <label
                  className="block mb-2 text-xs tracking-wide uppercase"
                  htmlFor="shootName"
                >
                  Shoot Name
                </label>
                <input
                  type="text"
                  id="shootName"
                  name="shootName"
                  placeholder="Spring 2023 Home"
                  className="w-full max-w-xs bg-gray-100 input input-bordered focus:outline-none focus:bg-white"
                />
              </div>

              <div className="w-full mb-6 md:mr-4 md:max-w-xs">
                <label
                  className="block mb-2 text-xs tracking-wide uppercase"
                  htmlFor="startDate"
                >
                  Start Date
                </label>
                <input
                  type="date"
                  id="startDate"
                  name="startDate"
                  required
                  className="w-full max-w-xs bg-gray-100 input input-bordered focus:outline-none focus:bg-white"
                />
              </div>

              <div className="w-full mb-6 md:max-w-xs">
                <label
                  className="block mb-2 text-xs tracking-wide uppercase"
                  htmlFor="endDate"
                >
                  End Date
                </label>
                <input
                  type="date"
                  id="endDate"
                  name="endDate"
                  required
                  className="w-full max-w-xs bg-gray-100 input input-bordered focus:outline-none focus:bg-white"
                />
              </div>

              <div className="w-full mb-6">
                <label
                  className="block mb-2 text-xs tracking-wide uppercase"
                  htmlFor="contentType"
                >
                  Content Type
                </label>
                <input
                  type="text"
                  id="contentType"
                  name="contentType"
                  placeholder="On-Figure"
                  required
                  className="w-full max-w-xs bg-gray-100 input input-bordered focus:outline-none focus:bg-white"
                />
              </div>

              <button type="submit" className="bg-black btn">
                Add Shoot
              </button>
            </div>
          </form>
        </div>
      </div>
      <h3 className="w-full mb-6 ml-1 text-lg font-medium">All Shoots</h3>
      <ShootTable shoots={shoots} handleDelete={handleDelete} />
    </main>
  );
}

export default Shoots