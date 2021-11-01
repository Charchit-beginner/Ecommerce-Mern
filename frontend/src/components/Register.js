import React from 'react'

function Register() {
    return (
        <div className="h-screen flex items-center justify-center">
        <div className=" space-y-5">
            <h1 className="text-2xl text-center font-extrabold leading-6 text-gray-800">Get Yourself Register</h1>
            <form className="space-y-4 " action="" method="post">
                <div>
                <label className="text-sm font-medium leading-none text-gray-800">Name</label>
                <input className="bg-purple-100 text-sm shadow-md rounded font-medium leading-none py-2 w-full pl-3 mt-2 border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent " aria-label="enter email adress" role="input" type="email" placeholder="Enter Email" />
                </div>
                <div>
                <lable className="text-sm font-medium leading-none text-gray-800">Username</lable>
                <input className="bg-purple-100 text-sm shadow-md rounded font-medium leading-none py-2 w-full pl-3 mt-2 border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent " aria-label="enter email adress" role="input" type="password" placeholder="Enter Username" />
                </div>
                <div>
                <lable className="text-sm font-medium leading-none text-gray-800">Password</lable>
                <input className="bg-purple-100 text-sm shadow-md rounded font-medium leading-none py-2 w-full pl-3 mt-2 border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent " aria-label="enter email adress" role="input" type="password" placeholder="Enter Password" />
                </div>
                <div>
                <lable className="text-sm font-medium leading-none text-gray-800">Confirm Password</lable>
                <input className="bg-purple-100 text-sm shadow-md rounded font-medium leading-none py-2 w-full pl-3 mt-2 border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent " aria-label="enter email adress" role="input" type="password" placeholder="Enter Password" />
                </div>
                <button className="py-2 w-full bg-purple-600 text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 ">Login</button>
            </form>
            
        
        </div>
        </div>
    )
}

export default Register
