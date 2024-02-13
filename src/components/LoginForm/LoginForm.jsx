import React from "react";
import { Link } from "react-router-dom";
import { BiUser } from "react-icons/bi";
import { AiOutlineLock } from "react-icons/ai";
import bg from "../../assets/Images/bg.jpeg";

const LoginForm = () => {
    return (
        <div className="h-[100vh] text-white  flex justify-center items-center bg-cover" style={{ backgroundImage: `url(${bg})` }}>
            <div
                className="bg-slate-500 border border-slate-300 rounded-md p-11 shadow-lg backdrop-filter 
        backdrop-blur-sm bg-opacity-30 relative "
            >
                <h1 className="text-4xl text-whitefont-bold text-center mb-6">Login</h1>
                <form>
                    <div className="relative my-4">
                        <input
                            type="username"
                            className="block w-96 py-3 px-0 text-base text-white bg-transparent border-0 border-b-2
               border-gray-300 appearance-none focus:outline-none focus:text-white focus:border-blue-500 peer placeholder-white"
                            placeholder="Username"
                        ></input>

                        <BiUser className="w-10 h-5 absolute top-4 right-4" />
                    </div>
                    <div className="relative my-4">
                        <input
                            type="password"
                            className="block w-96 py-3 px-0 text-base text-white  bg-transparent border-0 border-b-2
               border-gray-300 appearance-none focus:outline-none focus:text-white focus:border-blue-500 peer placeholder-white"
                            placeholder="Password"
                        ></input>

                        <AiOutlineLock className="w-10 h-5 absolute top-4 right-4" />
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="flex gap-2 items-center">
                            <input type="checkbox" />
                            <label>Remember Me</label>
                        </div>
                        <span className="text-white hover:text-blue-500">
                            Forgot Password?
                        </span>
                    </div>
                    <button
                        className="w-full mb-4 text-[18px] mt-6 rounded-full bg-white text-blue-800 hover:bg-blue-600
                     hover:text-white py-2 transition-colors duration-300"
                        type="submit"
                    >
                        Login
                    </button>
                    <div className="justify-center text-center">
                        <span className="m-5">
                            New Here?{" "}
                            <Link className="text-blue-500" to="/signup">
                                Create an Account
                            </Link>
                        </span>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;