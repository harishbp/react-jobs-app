import React from 'react'
import Logo from '../assets/logo.png'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    const linkClass = ({isActive})=>isActive?'bg-black p-2 rounded-md cursor-pointer':'hover:bg-black p-2 rounded-md cursor-pointer'
    return (
        <div className='w-full border-b bg-indigo-600'>
            <div className='flex justify-between items-center max-w-[1024px] mx-auto h-16 text-white px-4'>
                <Link to='/' className='flex items-center gap-3'>
                    <img src={Logo} alt='logo' className='w-10 h-10' />
                    <h1 className='font-bold'>React Jobs</h1>
                </Link>
                <div>
                    <ul className='flex gap-3'>
                        <NavLink to={'/'} className={linkClass}>Home</NavLink>
                        <NavLink to={'/jobs'} className={linkClass}>Jobs</NavLink>
                        <NavLink to={'/add'} className={linkClass}>Add Job</NavLink>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar
