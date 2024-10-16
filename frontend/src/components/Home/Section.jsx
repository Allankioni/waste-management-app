import React from 'react'
import hero from '../../../assets/images/hero.jpg'

const Section = () => {
  return (
    <section className='p-2 relative'>
        <div className='linear-gradient w-full h-full absolute'>
        <div className='w-1/2 h-full'>
            <div className='flex justify-center items-center h-[500px] flex-col gap-8'>
                <div className='flex justify-center items-center w-full h-full flex-col'>
                    <div className='z-20'>
                        <br />
                        <p className="text-6xl font-bold text-center p-2 font-serif text-white">Eco-Recyco</p>
                        <br />
                        <p className="text-3xl font-bold p-2 text-center font-serif text-white">The best platform for recycling and refurbishability</p>  
                    </div>
                </div>
            </div>
        </div>
        </div>
        <img src={hero} alt="" className='w-full h-screen rounded-2xl object-cover'/>
    </section>
  )
}

export default Section