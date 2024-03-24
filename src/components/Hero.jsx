import React from 'react'

const Hero = () => {
    return (
        <div className='h-[300px] bg-indigo-600 flex justify-center'>
            <div className='flex flex-col justify-center items-center gap-4'>
                <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold text-white'>
                    Become a React Dev
                </h1>
                <p className='font-bold text-white text-sm'>Find the React job thats fits your skills and needs</p>
            </div>
        </div>
    )
}

export default Hero
