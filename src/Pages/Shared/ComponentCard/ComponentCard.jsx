import React, { useContext, useLayoutEffect } from 'react'
import { AuthContext } from '../../../providers/AuthProvider'
import Swal from 'sweetalert2'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import useAxios from '../../../hooks/useAxios'
import useCart from '../../../hooks/useCart'
import useAdmin from '../../../hooks/useAdmin'
import { FaEdit } from 'react-icons/fa'
import './ComponentCard.css'

const ComponentCard = ({ name, category, price, brand, imageUrl, _id }) => {
    const navigate = useNavigate()
    const location = useLocation()
 
    const { user } = useContext(AuthContext)
    const [isAdmin] = useAdmin();
    const axiosSecure = useAxios()
    const [, refetch] = useCart()

    const handleAddToCart = (item) => {
        if (user) {
            const cartItem = {
                itemId: _id,
                email: user.email,
                name,
                price,
                category
            }

            axiosSecure.post('/cart', cartItem)
                .then(res => {
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: `${item.name} has been added to cart`,
                            showConfirmButton: false,
                            timer: 1000
                        });
                        refetch()
                    }
                })
        }
        else {
            Swal.fire({
                title: "You aren't logged in!",
                text: "Please login to add to cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Go to Login"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            });
        }
    }

    return (
        <div className="card lg:w-64 my-6 md:my-0 w-56 h-96 bg-base-100 shadow-xl border-2 m-auto">
            <figure className=" px-2 pt-2">
                <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
            </figure>
            <div className=" card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <h2 className="brand">Brand: {brand}</h2>
                <p className='price'>Price: ${price}</p>
                <div className="card-actions">
                    <button className="button" onClick={() => handleAddToCart({ name, category, price, category })}>Add to Cart</button>
                    {isAdmin &&
                        <button className='button'>
                        <Link to={`/dashboard/manageProducts/${_id}`}><FaEdit/></Link>
                        </button>
                    }
                </div>
            </div>
        </div>
    )
}

export default ComponentCard