import React, { useState } from "react";

import { Link } from "react-router-dom";
import axios from "axios";
import { BiUser } from "react-icons/bi";
import { AiOutlineLock } from "react-icons/ai";
import { MdOutlineEmail } from "react-icons/md";
import bg from "../../assets/Images/bg.jpeg";

const SignupForm = () => {
    const [user, setUser] = useState({
        username: "",
        email: "",
        password: "",
    });

    const handlechange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });
    };

    const handleReset = () => {
        setUser({

            name: '',
            age: '',
            phoneNumber: '',
            department: '',

        });

    }

    const handleSumbit = (e) => {
        e.preventDefault();
        const registerUser = async () => {
            try {
                await axios.post(`http://localhost:8000/sign_up`, user).then((response) => {
                    console.log(response);
                    console.log("success");

                    handleReset();

                });
            } catch {
                console.log("failure");
            }
        };
        handleReset();
        registerUser();
    };

    return (
        <div className="h-[100vh] text-white  flex justify-center items-center bg-cover" style={{ backgroundImage: `url(${bg})` }}>
            <div
                className="bg-slate-500 border border-slate-300 rounded-md p-12 shadow-lg 
      backdrop-filter backdrop-blur-sm bg-opacity-30 relative "
            >
                <h1 className="text-4xl text-whitefont-bold text-center mb-6">
                    Register
                </h1>
                <form onSubmit={handleSumbit}>
                    <div className="relative my-4">
                        <input
                            type="text"
                            className="block w-96 py-3 px-0 text-base text-white bg-transparent border-0 border-b-2 border-gray-300 
              appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-500 peer placeholder-white"
                            name="username"
                            value={user.username}
                            onChange={handlechange}
                            placeholder="Username"
                        ></input>

                        <BiUser className="w-10 h-5 absolute top-4 right-4" />
                    </div>
                    <div className="relative my-4">
                        <input
                            type="email"
                            className="block w-96 py-3 px-0 text-base text-white bg-transparent border-0 border-b-2 border-gray-300 
              appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-500 peer placeholder-white"
                            name="email"
                            value={user.email}
                            onChange={handlechange}
                            placeholder="Email"
                        ></input>

                        <MdOutlineEmail className="w-10 h-5 absolute top-4 right-4" />
                    </div>
                    <div className="relative my-4">
                        <input
                            type="password"
                            className="block w-96 py-3 px-0 text-base text-white bg-transparent border-0 border-b-2 border-gray-300 
              appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-500 peer placeholder-white"
                            name="password"
                            value={user.password}
                            onChange={handlechange}
                            placeholder="Password"
                        ></input>

                        < AiOutlineLock className="w-10 h-5 absolute top-4 right-4" />
                    </div>

                    <button
                        className="w-full mb-4 text-[18px] mt-6 rounded-full bg-white text-blue-800 hover:bg-blue-600 hover:text-white py-2 transition-colors duration-300"
                        type="submit"
                    >
                        Register
                    </button>
                    <div className="justify-center text-center">
                        <span className="m-5">
                            Already have an account?{" "}
                            <Link className="text-blue-500" to="/login">
                                Login
                            </Link>
                        </span>
                    </div>
                </form>
            </div>
        </div>
    );
};
export default SignupForm;


