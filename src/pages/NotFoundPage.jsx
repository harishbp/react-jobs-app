import React from 'react'
import { GoAlertFill } from "react-icons/go";
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className='flex justify-center flex-col items-center w-full mt-[100px] gap-3'>
        <div className='text-yellow-500'>
        <GoAlertFill size={50}/>
        </div>
        <h1 className='text-2xl md:text-4xl font-bold'>404 Not Found</h1>
        <p>Sorry, This page does not exists</p>
        <Link className='bg-black text-white py-3 px-3 rounded-lg shadow-lg' to='/'>Go back to Home</Link>
      
    </div>
  )
}

export default NotFoundPage
