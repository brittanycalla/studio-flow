import { useState, useEffect } from "react"
import { useOutletContext } from "react-router-dom"
import { API_BASE } from "../constants"
import ShootTable from "../components/ShootTable"
import getShootStatus from "../utils/getShootStatus"
import camera from "../camera.svg"
import tag from "../tag.svg"
import photo from "../photo.svg"

function Dashboard() {
  const { user } = useOutletContext()
  const [shoots, setShoots] = useState([])
  const [numShoots, setNumShoots] = useState(0)
  const [numItems, setNumItems] = useState(0)
  const [numShots, setNumShots] = useState(0)
  
  useEffect(() => {
    fetch(API_BASE + '/api/home', { credentials: 'include' })
      .then(res => res.json())
      .then(data => {
        data.shoots.forEach(shoot => shoot.status = getShootStatus(shoot))
        setShoots(data.shoots)
        setNumItems(data.numItems)
        setNumShots(data.numShots)
        setNumShoots(data.shoots.length)
      })    
  }, [])

  const getClassNames = (state) => {
    if (state > 0) {
      return 'animate-fade-in'
    } else {
      return 'invisible'
    }
  }

  if (!user) return null

  return (
    <>
          <h2 className="w-full mb-6 ml-1 text-2xl font-semibold">Welcome back, { user.username }</h2>
          {/* <!-- Stats --> */}
          <div className="flex flex-col w-full gap-4 mb-8 md:flex-row md:flex-wrap">
            <div className="transition-opacity duration-700 ease-in rounded-lg stats stat-shadow grow">
              <div className="stat">
                <div className="flex content-center gap-2 mb-2 text-xs tracking-wide uppercase stat-title">
                  <div className="inline-block">
                    <img src={camera} alt=""/>
                  </div>
                   <span className="leading-5">Shoots this week</span>
                </div>
                <div className={`opacity-100 stat-value font-semibold ${getClassNames(numShoots)}`}>{ numShoots } Shoots</ div>
              </div>
            </div>
            <div className="rounded-lg stats stat-shadow grow">
              <div className="stat">
                <div className="flex content-center gap-2 mb-2 text-xs tracking-wide uppercase stat-title">
                  <div className="inline-block">
                    <img src={tag} alt=""/>
                  </div>
                   <span className="leading-5">Items this week</span>
                </div>
                <div className={`opacity-100 stat-value font-semibold ${getClassNames(numItems)}`}>{ numItems } Items</ div>
              </div>
            </div>
            <div className="rounded-lg stats stat-shadow grow">
              <div className="stat">
                <div className="flex content-center gap-2 mb-2 text-xs tracking-wide uppercase stat-title">
                  <div className="inline-block">
                    <img src={photo} alt=""/>
                  </div>
                   <span className="leading-5">Shots this week</span>
                </div>
                <div className={`opacity-100 stat-value font-semibold ${getClassNames(numShots)}`}>{ numShots } Shots</ div>
              </div>
            </div>
          </div>

          <h3 className="w-full mb-6 ml-1 text-lg font-medium">This Week's Shoots</h3>
          <ShootTable shoots={shoots} />
    </>
  );
}

export default Dashboard;
