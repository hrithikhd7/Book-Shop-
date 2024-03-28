import { NavLink } from "react-router-dom";

const Header = () => {
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/lists">Listed Books</NavLink>
      </li>
      <li>
        <NavLink to="/read">Pages to Read</NavLink>
      </li>
      <li>
        <NavLink to="/about">Best Seller</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 flex md:flex-row flex-col gap-y-4 md:justify-around">
      <div className="navbar-start w-auto ">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <a className="text-4xl font-extrabold">BOOK WORM</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end flex gap-2 md:w-[230px]">
        <a className="btn btn-sm bg-green-600 rounded-lg text-white md:btn-lg">
          Sign In
        </a>
        <a className="btn btn-sm bg-teal-300 rounded-lg text-white md:btn-lg">
          Sign Up
        </a>
      </div>
    </div>
  );
};

export default Header;
