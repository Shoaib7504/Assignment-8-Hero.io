import React from 'react';

import heroimg from '../../assets/logo.png'
import { FaGithub } from "react-icons/fa";
import { Link, NavLink } from 'react-router';

const Navbar = () => {
    return (
        <div className=''>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li>
                                <NavLink to='/'>Home</NavLink>
                            </li>
                            <li>
                                <NavLink to='/'>Apps</NavLink>
                            </li>
                            <li>
                                <NavLink to='/'>Installation</NavLink>
                            </li>
                        </ul>
                    </div>
                    <img className='w-[40px] h-[40px]' src={heroimg} alt="" />
                    <NavLink className="btn btn-ghost text-xl text-transparent bg-clip-text bg-gradient-to-r from-[#632ee3] to-[#9f62f2]"><NavLink to='/'>HERO.IO</NavLink></NavLink>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <NavLink to='/'>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to='/apps'>Apps</NavLink>
                        </li>
                        <li>
                            <NavLink to='/installation'>Installation</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">

                    <NavLink to='https://github.com/Shoaib7504'>
                        <a className="btn text-white bg-gradient-to-r from-[#632ee3] to-[#9f62f2]"><span><FaGithub /></span> Contribute</a>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Navbar;