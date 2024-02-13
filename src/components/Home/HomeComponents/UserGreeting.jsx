import React from 'react'
import { FaList } from "react-icons/fa";
import { GrChapterAdd } from "react-icons/gr";

const UserGreeting = ({ handleViewClick, handleAddClick }) => {
    return (
        <div>
            <div className='bg-white p-6 mt-8 rounded-lg shadow-2xl '>
                <p className="text-lg mb-4  text-center" >
                    Welcome back! <br />
                    We're glad to see you again. Let's secure your passwords together!</p>
                <div className="flex space-x-6 justify-center align-middle">
                    <div className='w-44 h-32 bg-blue-200 rounded-md shadow-md shadow-blue-300 flex flex-col justify-center items-center '>
                        
                        <FaList className=' w-6 h-8 mb-2'/>
                        <p className='mb-2 font-semibold'>Browse Passwords</p>
                        <button onClick={handleViewClick}
                        className="px-4 py-2  bg-gradient-to-r from-blue-600 to-blue-400 shadow-md text-white rounded-md hover:bg-blue-600">View</button>
                    </div>
                    <div className='w-44 h-32 bg-green-200 rounded-md shadow-md shadow-green-300 flex flex-col justify-center items-center '>
                        <GrChapterAdd className='mb-2 w-6 h-8 text'/>
                        <p className='mb-2 font-semibold'>Record New Entry</p>
                        <button onClick={handleAddClick}
                        className="px-4 py-2 bg-gradient-to-r from-emerald-600 to-emerald-400 shadow-md text-white rounded-md hover:bg-green-600">Save</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default UserGreeting
