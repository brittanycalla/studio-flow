import { useState } from "react"
import { Link, NavLink, Outlet, useOutletContext } from "react-router-dom"
import Header from "./Header"
import logo from "../logo.svg"
import grid from "../grid.svg"
import camera from "../camera.svg"
import tag from "../tag.svg"

const Layout = () => {
  const [checked, setChecked] = useState(false)

  const handleClick = () => {
    setChecked(!checked)
  }

  const { user } = useOutletContext()
  if (!user) return null
  return (
    <>
      <Header display={user && 'lg:hidden'}/>
      <div className="drawer drawer-mobile h-[93vh] lg:h-screen">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" checked={checked} onChange={handleClick} />
        <div className="flex flex-wrap items-start content-start justify-around p-6 drawer-content lg:px-10 lg:mt-6">
          <Outlet context={{ user }} />
        </div> 

        <div className="border-r-[1px] border-[#F2F2F2] drawer-side" onClick={handleClick}>
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
          <ul className="p-4 overflow-y-auto bg-white menu w-60 text-base-content">
          {/* <!-- Sidebar content here --> */}
            <li className="hidden lg:flex">
              <Link to='/app' className={`hover:bg-transparent active:bg-transparent focus:bg-transparent`} id="logo">
                <img alt="studioflow logo" src={logo} className="hover:animate-spin" />
                <span className="text-xl font-bold tracking-wider">studio flow</span>
              </Link>
            </li>
            <li>
              <NavLink to='/app' className="font-medium group active:bg-black active:text-white" end>
                <img alt="" src={grid} className="group-active:invert"/>
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink to="/app/shoots" className="font-medium group active:bg-black active:text-white">
                <img alt="" src={camera} className="group-active:invert"/>
                Shoots
              </NavLink>
            </li>
            <li>
            <NavLink to="/app/items" className="font-medium group active:bg-black active:text-white">
              <img alt="" src={tag} className="group-active:invert"/>
                Items
              </NavLink>
            </li>
            <li className="mt-auto">
              <NavLink className="active:bg-black active:text-white" to="/logout">logout</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Layout