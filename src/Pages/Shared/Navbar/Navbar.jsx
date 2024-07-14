import { useContext } from "react"
import { Link, NavLink } from "react-router-dom"
import { AuthContext } from "../../../providers/AuthProvider"
import './Navbar.css'


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(err => console.log(err))
    }

    const navOptions = <>
        <li><NavLink to='/components'>Components</NavLink></li>
        {
            user && <li><NavLink to='/dashboard/cart'>Dashboard
            </NavLink></li>
        }

        {
            user ?
                <>
                    <li className="mx-6 pt-2 text-green-600">{user.displayName}</li>
                    <li><button onClick={handleLogOut} className="btn-logout">Logout</button></li>
                </>
                :
                <><li><NavLink to='/login'>Login</NavLink></li></>
        }
    </>

    return (
        <div id="navbar" className="bg-black text-white fixed z-10 right-0 left-0">
            <div className="container navbar ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 text-black rounded-box w-64">
                            {navOptions}
                        </ul>
                    </div>
                    <Link to={'/'} className="btn btn-ghost lg:text-3xl text-xl">Techshop</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-xl">
                        {navOptions}
                    </ul>
                </div>
                {/* <div className="navbar-end">
                <a className="btn">Button</a>
            </div> */}
            </div>

        </div>
    )
}

export default Navbar