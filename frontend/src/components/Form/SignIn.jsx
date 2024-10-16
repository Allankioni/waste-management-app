import React, { useState } from 'react'
import reuse from '../../../assets/images/reuse.jpg'
import { Link } from 'react-router-dom'


const SignIn = () => {
    const [userDetails , setUserDetails] = useState({
        username: "",
        password: "",
    })
    const handleChange = (event) => {
        const {name, value} = event.target
        setUserDetails(() => ({...userDetails, [name]: value}))
        console.log(userDetails)
    }

  return (
    <div className='flex justify-center items-center w-full h-[600px]'>
        <div className="flex justify-between items-center w-[950px] h-[580px] rounded-2xl shadow-2xl border">
            <div className='h-[550px] w-[500px] pl-8 pt-2'>
                <h1 className='font-bold text-4xl text-green-800'>Welcom Back</h1>
                <p className='text-green-800'>Sign in to continue</p> 

                <form>
                    <div className='my-4'>
                    <input type="text" placeholder="Email or username" className='border-green-800 border hover:outline-none focus:outline-none h-[45px] w-[450px] rounded-full py-2 px-4' value={userDetails.username} onChange={handleChange}/>
                    <div className="after"></div>
                    </div>
                    <div className='my-4'>
                    <input type="password" placeholder="Password" className='border-green-800 border hover:outline-none focus:outline-none h-[45px] w-[450px] rounded-full py-2 px-4'value={userDetails.password} onChange={handleChange}/>
                    <div className="after"></div>
                    </div>
                    <div className='flex justify-between items-center'>
                    <button className='text-green-800'>Forgort Password ?</button>
                    </div>
                    <br />
                    <button className='h-[45px] w-[450px] text-white bg-green-800 hover:text-green-800 hover:bg-white hover:border hover:border-green-800 rounded-full'>Sign in</button>
                </form>

<br />
<div className='flex justify-between'>
                <p>Don't have an account ? </p><Link to="/registration"
                className='text-green-800'>Sign up</Link>
</div>
                <br />
                <p className='text-center'>or sign in with</p>
                <br />
                <div className='flex flex-col gap-5'>
                    <button className='text-white bg-green-800 hover:text-green-800 hover:bg-white hover:border hover:border-green-800 p-2 flex justify-center items-center gap-4 w-[450px] h-[45px] rounded-full'><ion-icon name="logo-google"></ion-icon><p>Google</p></button>
                    <button className='text-white bg-green-800 hover:text-green-800 hover:bg-white hover:border hover:border-green-800 p-2 flex justify-center items-center gap-4 w-[450px] h-[45px] rounded-full'><ion-icon name="logo-facebook"></ion-icon><p>Facebook</p></button>
                </div>
            </div>
            <div className='w-[400px] h-full'>
                <img src={reuse} alt="" className='w-[400px] h-full object-cover'/>
            </div>
        </div>
    </div>
  )
}

export default SignIn