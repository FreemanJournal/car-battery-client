import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { FcHome } from "react-icons/fc";
import { Link, NavLink } from 'react-router-dom';
import auth from '../../utilities/firebase.init';

export default function Navbar() {
  const [user, loading, error] = useAuthState(auth);

  const menuItems = [
    { item: 'Home', href: "/", status: true },
    // { item: 'Blogs', href: "/blog", status: true },
    // { item: 'My Portfolio', href: "/portfolio", status: true },
    { item: 'Dashboard', href: "/dashboard", status: !!user },
    { item: 'SignIn', href: "/signIn", status: !user },
    { item: 'Registration', href: "/registration", status: !user }]

  const signOutHandler = () => {
    localStorage.removeItem('accessToken')
    signOut(auth);
  };

  return (
    <section className="navbar bg-base-100 mx-auto md:px-32">
      <div className="navbar-start ">
        {/* Mobile Menu */}
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {menuItems.map((menu, index) => (
              <NavLink to={menu.href} style={({ isActive }) => isActive ? { background: "rgb(71 85 105 / 1)", color: "white" } : {}} key={index} className={`btn btn-ghost mx-3 hover:bg-slate-600 hover:text-white duration-300 ${menu.status ? "" : "hidden"}`}>{menu.item}</NavLink>
            ))}
            {user && <button onClick={() => signOutHandler()} className='btn btn-ghost mx-3 hover:bg-slate-600 hover:text-white duration-300'>Sign Out</button>}
          </ul>
        </div>
        <NavLink to={"/"} className="normal-case text-xl font-medium text-teal-600">Speed Battery Manufacturer</NavLink>
      </div>
      {/* Desktop Menu */}
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal p-0 lg:uppercase lg:text-gray-500 lg:tracking-wide lg:font-bold lg:text-xs lg:space-x-4 lg:flex">
          {menuItems.map((menu, index) => (
            <NavLink to={menu.href} key={index} style={({ isActive }) => isActive ? { borderBottom: '5px solid rgb(185 28 28 / 1)', color: 'rgb(185 28 28 / 1)' } : {}} className={`block h-16 leading-[4rem] border-b-4 border-transparent hover:text-red-700 hover:border-current ${menu.status ? "" : "hidden"}`}>{menu.item}</NavLink>
          ))}
          {user && <Link to="/dashboard" className={`block h-16 leading-[4rem] border-b-4 border-transparent hover:text-red-700 hover:border-0`}>{user?.displayName}</Link>}

          {user && <button onClick={() => signOutHandler()} className='block uppercase font-bold h-16 leading-[4rem] border-b-4 border-transparent hover:text-red-700 hover:border-current'>Sign Out</button>}

        </ul>
      </div>
      <div className="navbar-end  lg:hidden">
        <label htmlFor="my-drawer-2" className=" drawer-button lg:hidden text-3xl cursor-pointer"><FcHome /></label>
      </div>

    </section >
  )
}
