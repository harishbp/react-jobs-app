import React, { useEffect, useState } from 'react'
import jobs from '../data/jobs.json'
import Joglisting from './Joglisting'


const Joblistings = ({ isHome = false }) => {
  const [jobs, setJobs] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchJobs = async () => {
      setLoading(true)
      const url = isHome ? '/api/jobs' : '/api/jobs?_limit=2'
      const res = await fetch(url)
      const data = await res.json()
      setJobs(data?.jobs)
      setLoading(false)
    }
    fetchJobs()
  }, [])

  return (
    <div className={jobs.length ? 'bg-blue-100' : ''}>
      <div className='max-w-[1024px] mx-auto py-5 px-4'>
        <h1 className='text-indigo-500 font-bold text-3xl text-center mt-4'>{isHome ? 'Browse Jobs' : 'Recents' + ' Jobs'}</h1>
        {jobs.length ? (<div className='grid md:grid-cols-2 py-16 gap-3'>
          {jobs && jobs.map((job, index) =>
            <Joglisting key={job.id} {...job} />
          )}
        </div>)
          : loading ? (<p className='text-center mt-10 font-bold text-red-500'>Loading....</p>)
          : (<p className='text-center mt-10 font-bold text-red-500'>No jobs available</p>)}
      </div>
    </div>
  )
}

export default Joblistings
