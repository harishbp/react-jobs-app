import React from 'react'
import { Link } from 'react-router-dom'

const HomeCards = () => {
    return (
        <div className='max-w-[1024px] mx-auto mt-10 mb-10'>
            <div className='flex flex-col md:flex-row gap-3 px-4'>
                <div className='bg-gray-100 w-full p-6 rounded-md shadow-md'>
                    <h1 className='font-bold my-2'>For Developers</h1>
                    <p className='my-2 text-sm'>Browse our React jobs and starts your career today</p>
                    <Link to={'/jobs'}>
                        <button className='bg-black p-2 text-white rounded-md my-2'>Browse Jobs</button>
                    </Link>
                </div>
                <div className='bg-blue-100 w-full p-6 rounded-md shadow-md'>
                    <h1 className='font-bold my-2'>For Employers</h1>
                    <p className='my-2 text-sm'>List your job to find perfect developer for the role</p>
                    <Link to={'/add'}>
                        <button className='bg-blue-500 p-2 text-white rounded-md my-2'>Add Job</button>
                    </Link>
                </div>

            </div>

        </div>
    )
}

export default HomeCards
