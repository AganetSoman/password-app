import React from 'react'
import { Link } from 'react-router-dom'
import {BiUser} from "react-icons/bi"
import {AiOutlineLock} from "react-icons/ai"
import { MdOutlineEmail } from "react-icons/md";

const SignupForm = () => {
  return (
    <div>
            <div className='bg-slate-500 border border-slate-300 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative '>
                <h1 className='text-4xl text-whitefont-bold text-center mb-6'>Register</h1>
                <form>
                    <div className='relative my-4'>
                        <input type='username' className='block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-violet-900 peer' ></input>
                        <label className='absolute text-sm duration-300 transform -translate scale-75 top-3 -z-10 orgin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-focus:-translate-y-6'>Username</label>
                        <BiUser className='absolute top-4 right-4'/>
                    </div>
                    <div className='relative my-4'>
                        <input type='password' className='block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-violet-900 peer' ></input>
                        <label className='absolute text-sm duration-300 transform -translate scale-75 top-3 -z-10 orgin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-focus:-translate-y-6'>Email</label>
                        <MdOutlineEmail  className='absolute top-4 right-4'/>
                    </div>
                    <div className='relative my-4'>
                        <input type='password' className='block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-violet-900 peer' ></input>
                        <label className='absolute text-sm duration-300 transform -translate scale-75 top-3 -z-10 orgin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-focus:-translate-y-6'>Your Passsword</label>
                        <AiOutlineLock className='absolute top-4 right-4'/>
                    </div>
      
                    <button className='w-full mb-4 text-[18px] mt-6 rounded-full bg-white text-blue-800 hover:bg-blue-600 hover:text-white py-2 transition-colors duration-300' type='submit'>Register</button>
                    <div className='justify-center text-center'>
                        <span className='m-5'>Already have an account? <Link className='text-blue-500' to='/login'>Login</Link></span>
                    </div>
                </form>
            </div>
        </div>
  )
}

export default SignupForm
