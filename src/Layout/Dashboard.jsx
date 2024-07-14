import React, { useContext } from 'react'
import { FaCcMastercard, FaHome, FaList, FaShoppingCart, FaUser } from 'react-icons/fa'
import { NavLink, Outlet } from 'react-router-dom'
import useAdmin from '../hooks/useAdmin';
import { AuthContext } from '../providers/AuthProvider';

const Dashboard = () => {
    const [isAdmin] = useAdmin();
    return (
        <div className="flex">
            <div className='w-64 min-h-screen bg-orange-300'>
                {/* ----------for admins only----------------------- */}
                {isAdmin && <ul className="menu">
                    <li className='my-3'><NavLink to='/dashboard/adminHome'><FaUser />Admin Home</NavLink></li>
                    <li className='my-3'><NavLink to='/dashboard/users'><FaUser />All Users</NavLink></li>
                    <li className='my-3'><NavLink to='/dashboard/addProducts'><FaUser />Add Products</NavLink></li>
                    {/* <li className='my-3'><NavLink to='/dashboard/manageProducts'><FaList />Manage Products</NavLink></li> */}
                    <div className="divider"></div>
                </ul>}
                {/* -----------for users-------------------- */}
                <ul className="menu">

                    <li className='my-3'><NavLink to='/dashboard/profile'><FaUser />Profile</NavLink></li>
                    <li className='my-3'><NavLink to='/dashboard/cart'><FaShoppingCart />Cart</NavLink></li>
                    {/* <li className='my-3'><NavLink to='/dashboard/payment'><FaCcMastercard />Payment</NavLink></li> */}
                    <div className="divider"></div>
                    <li><NavLink to='/'><FaHome /> Go Back</NavLink></li>
                </ul>
            </div>
            <div className='flex-1'>
                <Outlet />
            </div>

        </div>
    )
}

export default Dashboard