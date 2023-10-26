import { useState, useEffect } from "react"
import { Link, useOutletContext } from "react-router-dom"
import grid from "../grid.svg"
import camera from "../camera.svg"
import tag from "../tag.svg"

const Drawer = () => {
  const [checked, setChecked] = useState(false)

  const handleClick = () => {
    setChecked(!checked)
  }

  return (
    <div className="drawer drawer-mobile h-[93vh] lg:h-screen">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" checked={checked} />
      <div className="flex flex-wrap items-start content-start justify-around p-6 drawer-content lg:px-10 lg:mt-6">
        {/* <!-- Page content here --> */}
      </div> 

      <div className="border-r-[1px] border-[#F2F2F2] drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
        <ul className="p-4 overflow-y-auto bg-white menu w-60 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li className="hidden lg:flex">
            <Link className="hover:bg-transparent" to="/" id="logo">
              <img src={grid} className="w-8 h-8 mr-2 stroke-black group-active:stroke-white"/>
              <span className="text-[1.25rem] font-bold tracking-wider">studio flow</span>
            </Link>
          </li>
          <li onClick={handleClick}>
            <Link className="group active:bg-black active:text-white" to="/">
              <img src={camera} className="w-8 h-8 mr-2 stroke-black group-active:stroke-white"/>
              Dashboard
            </Link>
          </li>
          <li>
            <Link className="group active:bg-black active:text-white" to="/shoot">
              <img src={tag} className="w-8 h-8 mr-2 stroke-black group-active:stroke-white"/>
              Shoots
            </Link>
          </li>
          <li>
            <Link className="group active:bg-black active:text-white" to="/items">
              <svg className="stroke-black group-active:stroke-white group-active:fill-white" xmlns="http://www.w3.org/ 2000/svg" width="20" height="20" fill="#000000" viewBox="0 0 256 256"><path d="M122.7,25.9,42,42,25. 9,122.7a8,8,0,0,0,2.2,7.2L132.5,234.3a7.9,7.9,0,0,0,11.3,0l90.5-90.5a7.9,7.9,0,0,0,0-11.3L129.9,28.  1A8,8,0,0,0,122.7,25.9Z" fill="none" stroke-linecap="round" stroke-linejoin="round"   stroke-width="16"></path><circle cx="84" cy="84" r="12"></circle></svg>
              Items
            </Link>
          </li>
          <li className="mt-auto">
            <Link className="active:bg-black active:text-white" to="/logout">logout</Link>
          </li>
        </ul>

      </div>
    </div>
  )
}

export default Drawer