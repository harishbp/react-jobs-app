import React from 'react'
import { Link } from 'react-router-dom'

const ViewAllJobs = () => {
  return (
    <div className='w-full py-10 px-4'>
      <div className='flex justify-center'>
        <Link to='/jobs' className='bg-black text-white text-center w-[400px] px-2 py-3 rounded-lg'>View All Jobs</Link>
      </div>
    </div>
  )
}

export default ViewAllJobs
