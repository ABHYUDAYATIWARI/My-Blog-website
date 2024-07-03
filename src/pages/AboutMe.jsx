import React from 'react'

function AboutMe() {
  return (
    <div className='w-full'>
        <div className='felx'>
            <div className='m-1 my-2 inline-block'>
            <img src="./images/icon.jpg" alt="icon" />
            </div>
            <p>
                <h1 className='text-2xl '> <span className='shadow-md shadow-black text-white'>About me</span></h1>
                <p className='text-white'> I am a student and solo developer</p>
                <a href="mailto:b23ch1001@iitj.ac.in" className='underline text-xl'> Contact me</a>
            </p>
        </div>

    </div>
  )
}

export default AboutMe