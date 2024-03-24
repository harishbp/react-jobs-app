import React, { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { FaArrowLeft, FaMapMarkerAlt } from "react-icons/fa";
import { toast } from 'react-toastify';

const JobPage = ({ deleteJob }) => {
    const [job, setJob] = useState(null)
    const [loading, setLoading] = useState(true)
    const params = useParams()
    const navigate = useNavigate()
    useEffect(() => {
        const fetchJobs = async () => {
            setLoading(true)
            const res = await fetch(`/api/jobs/${params.id}`)
            const data = await res.json()
            setJob(data.job)
            setLoading(false)
        }
        fetchJobs()
    }
        , [])
    const deleteJobHandler = async (id) => {
        if (id < 6) return toast.error('You can not delete first 6 jobs');
        const res = await deleteJob(id)
        return navigate('/jobs')
    }

    return (
        <div className=''>
            <div className='max-w-[1024px] mx-auto py-4 px-4 flex items-center gap-2 text-blue-500'>
                <FaArrowLeft /><Link to='/jobs' className=''>Back to Jobs</Link>
            </div>
            {loading ? <div className='text-center mt-10 font-bold text-red-500'>Loading....</div>
                : <div className='bg-blue-100 w-full py-5'>
                    <div className='max-w-[1024px] mx-auto px-4'>
                        {job && <div className='grid md:grid-cols-3 gap-2'>
                            <div className=' md:col-span-2'>
                                <div className='bg-white mt-5 px-5 py-5 flex flex-col gap-4 rounded-lg shadow-lg'>
                                    <h1 className='text-gray-400'>{job.type}</h1>
                                    <h1 className='text-4xl font-bold'>{job.title}</h1>
                                    <h1 className='text-orange-500 text-left w-full md:w-auto'><FaMapMarkerAlt className='inline mb-1' />{job.location}</h1>
                                </div>
                                <div className='bg-white mt-5 px-5 py-5 flex flex-col gap-4 rounded-lg shadow-lg'>
                                    <h1 className='text-indigo-600 font-bold'>Job Description</h1>
                                    <h1 className='italic'>{job.description}</h1>
                                    <h1 className='text-indigo-600 font-bold'>Salary</h1>
                                    <h1 className='font-bold'>{job.salary}</h1>
                                </div>
                            </div>
                            <div className='grid sm:grid-cols-2 gap-2 md:grid-cols-1'>
                                <div className='bg-white mt-5 px-5 py-5 rounded-lg shadow-lg'>
                                    <h1 className='font-bold mb-3'>Company Info</h1>
                                    <h1 className='text-2xl mb-2'>{job.company.name}</h1>
                                    <p className='text-sm text-gray-600 mb-2 italic'>{job.company.description}</p>
                                    <div className='border bottom-2'></div>
                                    <h1 className=' mb-2 mt-3'>Contact Email:</h1>
                                    <input type='text' value={job.company.contactEmail} className='border border-gray-200 p-2 w-full rounded-md mb-2' />
                                    <h1 className='mb-2'>Contact Phone:</h1>
                                    <input type='text' value={job.company.contactPhone} className='border border-gray-200 p-2 w-full rounded-md mb-2' />
                                </div>
                                <div className='bg-white mt-5 px-5 py-5 rounded-lg shadow-lg flex flex-col gap-3'>
                                    <h1 className='font-bold'>Manage Job</h1>
                                    {job.id < 6 && <span className=' text-xs text-red-500'>Alert: You cannot edit or delete this job!!</span>}
                                    <Link to={`/edit/${job.id}`}><button className='w-full text-white bg-blue-500 rounded-full px-3 py-2'>Edit Job</button></Link>
                                    <button className='w-full text-white bg-red-500 rounded-full px-3 py-2' onClick={() => deleteJobHandler(job.id)}>Delete Job</button>
                                </div>
                            </div>
                        </div>}

                    </div>
                </div>}


        </div>
    )
}

export default JobPage
