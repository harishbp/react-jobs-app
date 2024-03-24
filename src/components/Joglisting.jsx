import React from 'react'
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from 'react-router-dom'

const Joglisting = ({ id, title, type, description, salary, location, company }) => {
    const [showDescription, setShowDescription] = React.useState(false)

    let jobDescription = description
    if (description.length > 100 && !showDescription) {
        jobDescription = description.substring(0, 100) + '...'
    }
    return (
        <div className='bg-gray-100 px-4 py-6 rounded-md shadow-md'>
            <div className='mb-6'>
                <p className='text-gray-500'>{type}</p>
                <h1 className='font-bold'>{title}</h1>
            </div>

            <div className='text-sm italic'>{jobDescription}</div>
            {description.length>100 && <button onClick={() => setShowDescription(!showDescription)} className='text-blue-500 text-sm cursor-pointer'>{showDescription ? 'show less' : 'more'}</button>}
            <h3 className='text-indigo-500 mt-2 mb-2'>{salary}</h3>
            <div className='border border-gray-200'></div>
            <div className='flex flex-col md:flex-row justify-between items-center mt-4 gap-2'>
                <h1 className='text-orange-500 text-left w-full md:w-auto'><FaMapMarkerAlt className='inline mb-1' />{location}</h1>
                <Link to={`/jobs/${id}`} className='bg-indigo-400 text-white shadow-md p-2 rounded-md w-full md:w-auto'>Read More</Link>
            </div>

        </div>
    )
}

export default Joglisting
