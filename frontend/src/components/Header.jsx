import { Link, useOutletContext } from "react-router-dom";
import logo from "../logo.svg";

const Header = ({ background, display }) => {
  const { user } = useOutletContext()
  return (
    <header
      className={`${background} ${display} h-[7vh] flex justify-start items-center w-full px-8 mt-4 mx-auto max-w-7xl lg:px-16`}
    >
      <Link to={user ? '/app' : '/'} className="flex gap-2" id="logo">
        <img src={logo} className="hover:animate-spin" alt="studioflow logo" />
        <span className="text-xl font-bold tracking-wider">studio flow</span>
      </Link>

      {user && <label htmlFor="my-drawer-2" className="ml-auto drawer-button lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#000" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><line x1="40" y1="128" x2="216" y2="128" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></line><line x1="40" y1="64" x2="216" y2="64" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></line><line x1="40" y1="192" x2="216" y2="192" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></line></svg>
      </label>}
    </header>
  );
};

Header.defaultProps = {
  background: "bg-white",
  display: "",
};

export default Header;
