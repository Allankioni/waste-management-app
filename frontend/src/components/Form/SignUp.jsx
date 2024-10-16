import React, { useState } from 'react'
import reuse from '../../../assets/images/reuse.jpg'
import { Link } from 'react-router-dom'


const SignUp = () => {
    const [userDetails , setUserDetails] = useState({
        username: "",
        email: "",
        password: "",
    })
    const handleChange = (event) => {
        const {name, value} = event.target
        setUserDetails(() => ({...userDetails, [name]: value}))
        console.log(userDetails)
    }

  return (
    <div className='flex justify-center items-center w-full h-[720px]'>
        <div className="flex justify-between items-center w-[950px] h-[650px] rounded-2xl shadow-2xl border">
            <div className='w-[400px] h-full'>
                <img src={reuse} alt="" className='w-[400px] h-full object-cover'/>
            </div>
            <div className='h-[550px] w-[500px] pl-4'>
                <h1 className='font-bold text-4xl text-green-800'>Get Started</h1>
                <p className='text-green-800'>create a new account</p> 

                <form>
                    <div className='my-4'>
                    <input type="text" placeholder="Username" className='border-green-800 border hover:outline-none focus:outline-none h-[45px] w-[450px] rounded-full py-2 px-4' value={userDetails.username} onChange={handleChange}/>
                    <div className="after"></div>
                    </div>
                    <div className='my-4'>
                    <input type="text" placeholder="Email" className='border-green-800 border hover:outline-none focus:outline-none h-[45px] w-[450px] rounded-full py-2 px-4' value={userDetails.username} onChange={handleChange}/>
                    <div className="after"></div>
                    </div>
                    <div className='my-4'>
                    <input type="password" placeholder="Password" className='border-green-800 border hover:outline-none focus:outline-none h-[45px] w-[450px] rounded-full py-2 px-4'value={userDetails.password} onChange={handleChange}/>
                    <div className="after"></div>
                    </div>
                    <div className='flex justify-between items-center'>
                    </div>
                    <br />
                    <button className='h-[45px] w-[450px] text-white bg-green-800 hover:text-green-800 hover:bg-white hover:border hover:border-green-800 rounded-full'>Sign in</button>
                </form>

<br />
<div className='flex gap-8'>
                <p>Have an account ? </p><Link to="/sign-in" className='text-green-800'>Sign in</Link>
</div>
                <br />
                <p className='text-center'>or sign in with</p>
                <br />
                <div className='flex flex-col gap-5'>
                    <button className='text-white bg-green-800 hover:text-green-800 hover:bg-white hover:border hover:border-green-800 p-2 flex justify-center items-center gap-4 w-[450px] h-[45px] rounded-full'><ion-icon name="logo-google"></ion-icon><p>Google</p></button>
                    <button className='text-white bg-green-800 hover:text-green-800 hover:bg-white hover:border hover:border-green-800 p-2 flex justify-center items-center gap-4 w-[450px] h-[45px] rounded-full'><ion-icon name="logo-facebook"></ion-icon><p>Facebook</p></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SignUp