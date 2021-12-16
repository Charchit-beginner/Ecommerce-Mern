import React , {useRef} from 'react'
import {Link , useLocation, useHistory} from "react-router-dom"

function Navbar() {
    const navBtn = useRef(null)
    const history = useHistory()
    let location = useLocation()
    const ToggleNav = () => {
        navBtn.current.classList.toggle("hidden")
    }
    const logout = () => {
        localStorage.removeItem("token")
        history.push("/login")
      }
    const returnBtn = () =>{
        if (localStorage.getItem("token")){
          return <button className="py-2 px-4 bg-purple-600 text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600" onClick={logout}>Logout</button>
        }
        return <><Link to="/login"><button className=" py-2 px-4 bg-purple-600 text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 ">sign In</button></Link>
        <Link to="/register"><button className=" py-2 px-4 bg-purple-600 text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 ">Sign Up</button></Link></>
      }  
    return (
        <>
            <nav className="bg-white shadow-lg fixed top-0 right-0 left-0">
                <div className="flex justify-between px-4">
                    <div className="flex space-x-9">
                        <div className="flex items-center">
                            <h1 className=" whitespace-nowrap font-semibold text-lg text-gray-600"><Link to="" className="">TheMerSterSTER</Link ></h1>
                        </div>
                        <div className="md:flex hidden items-center space-x-2">
                            <span className={`px-2 py-4  ${location.pathname == '/' ? "border-b-4":""} border-purple-600 hover:bg-purple-50 w-30 text-center`}>
                                <Link to="/" className="px-2 py-4  hover:text-purple-900 font-semibold transition duration-300">Home</Link >
                            </span>
                            {/* <span className={`px-2 py-4  ${location.pathname == '/products' ? "border-b-4":""} border-purple-600 hover:bg-purple-50 w-30 text-center`}>
                                <Link to="/products" className="px-2 py-4 hover:text-purple-900 font-semibold transition duration-300">Products</Link >
                            </span> */}
                            <span className={`px-2 py-4  ${location.pathname == '/cart' ? "border-b-4":""} border-purple-600 hover:bg-purple-50 w-30 text-center`}>
                                <Link to="/cart" className="px-2 py-4 hover:text-purple-900 font-semibold transition duration-300">Cart</Link >
                            </span>
                        </div>
                    </div>
                        
                    <div className="md:flex hidden items-center space-x-4">
                        {returnBtn()}
                    </div>
                    <div className="md:hidden flex items-center my-3">
                            <button className="outline-none mobile-menu-button" onClick={ToggleNav}>
                                <svg
                                    className="w-6 h-6 text-gray-500"
                                    xshow="!showMenu"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path d="M4 6h16M4 12h16M4 18h16"></path>
                                </svg>
                            </button>
                        </div>
                </div>

            <div ref={navBtn} className="hidden md:hidden p-2">
                <ul className="w-full ">
                    <li className="w-full flex justify-center text-md p-2 hover:bg-purple-300 transition duration-300"><Link to="/">Home</Link ></li>
                    {/* <li className="w-full flex justify-center text-md p-2 hover:bg-purple-300 transition duration-300"><Link to="/products">Products</Link ></li> */}
                    <li className="w-full flex justify-center text-md p-2 hover:bg-purple-300 transition duration-300"><Link to="/cart">Cart</Link ></li>
                </ul>
                <div className="flex justify-center space-x-3">
                {returnBtn()}
                </div>
                        </div>
                    </nav>
        </>
    )
}

export default Navbar
