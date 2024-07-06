import React from 'react'
import { FaCcMastercard, FaList, FaShoppingCart, FaUser } from 'react-icons/fa'
import { NavLink, Outlet } from 'react-router-dom'

const Dashboard = () => {
    const isAdmin = true;
    return (
        <div className="flex">
            <div className='w-64 min-h-screen bg-orange-300'>
                {/* ----------for admins only----------------------- */}
                <ul className="menu">
                    <li className='my-3'><NavLink to='/dashboard/users'><FaUser />All Users</NavLink></li>
                    <li className='my-3'><NavLink to='/dashboard/addProducts'><FaUser />Add Products</NavLink></li>
                    <li className='my-3'><NavLink to='/dashboard/manageProducts'><FaList />Manage Products</NavLink></li>
                    <div className="divider"></div>          
                </ul>
                {/* -----------for users-------------------- */}
                <ul className="menu">
                    <li className='my-3'><NavLink to='/dashboard/profile'><FaUser />Profile</NavLink></li>
                    <li className='my-3'><NavLink to='/dashboard/cart'><FaShoppingCart />Cart</NavLink></li>
                    <li className='my-3'><NavLink to='/dashboard/payment'><FaCcMastercard />Payment</NavLink></li>
                    <div className="divider"></div>
                    <li><NavLink to='/'>Go to Home</NavLink></li>                    
                </ul>
            </div>
            <div className='flex-1'>
                <Outlet />
            </div>

        </div>
    )
}

export default Dashboard