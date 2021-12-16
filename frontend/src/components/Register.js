import React, { useState,useContext } from 'react'
import AuthContext from '../context/auth/AuthContext'
import {useHistory} from "react-router-dom"
function Register() {
    const history = useHistory()
    const context = useContext(AuthContext)
    const {Auth} = context

    const SubmitForm = async (e) => {
        e.preventDefault()
        let res = await Auth("register",cred)
        
        if (res==true) history.push("/")
        
    }
    const [cred, setCred] = useState({ name: "", email: "", password: "" })
    const InputChange = (e) => {
        setCred({ ...cred, [e.target.name]: e.target.value })
    }
    return (
        <div className="h-screen flex items-center justify-center">
            <div className=" space-y-5">
                <h1 className="text-2xl text-center font-extrabold leading-6 text-gray-800">Get Yourself Register</h1>
                <form className="space-y-4 " action="" method="post" onSubmit={SubmitForm}>
                    <div>
                        <label className="text-sm font-medium leading-none text-gray-800">Name</label>
                        <input className="bg-purple-100 text-sm shadow-md rounded font-medium leading-none py-2 w-full pl-3 mt-2 border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent " aria-label="enter email adress" role="input" name="email" type="email" placeholder="Enter Email" onChange={InputChange} />
                    </div>
                    <div>
                        <label className="text-sm font-medium leading-none text-gray-800">Username</label>
                        <input className="bg-purple-100 text-sm shadow-md rounded font-medium leading-none py-2 w-full pl-3 mt-2 border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent " aria-label="enter email adress" role="input" name="name" type="password" placeholder="Enter Name" onChange={InputChange} />
                    </div>
                    <div>
                        <label className="text-sm font-medium leading-none text-gray-800">Password</label>
                        <input className="bg-purple-100 text-sm shadow-md rounded font-medium leading-none py-2 w-full pl-3 mt-2 border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent " aria-label="enter email adress" role="input" name="password" type="password" placeholder="Enter Password" onChange={InputChange} />
                    </div>
                    <div>
                        <label className="text-sm font-medium leading-none text-gray-800">Confirm Password</label>
                        <input className="bg-purple-100 text-sm shadow-md rounded font-medium leading-none py-2 w-full pl-3 mt-2 border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent " aria-label="enter email adress" role="input" name="confirmPass" type="password" placeholder="Enter Password" onChange={InputChange} />
                    </div>
                    <button className="py-2 w-full bg-purple-600 text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 ">Login</button>
                </form>


            </div>
        </div>
    )
}

export default Register
