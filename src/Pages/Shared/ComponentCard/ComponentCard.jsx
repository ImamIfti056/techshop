import React, { useContext, useLayoutEffect } from 'react'
import { AuthContext } from '../../../providers/AuthProvider'
import Swal from 'sweetalert2'
import { useLocation, useNavigate } from 'react-router-dom'
import useAxios from '../../../hooks/useAxios'
import useCart from '../../../hooks/useCart'

const ComponentCard = ({ name, category, price, id }) => {
    const navigate = useNavigate()
    const location = useLocation()

    const { user } = useContext(AuthContext)
    const axiosInstance = useAxios()
    const [, refetch] = useCart()

    const handleAddToCart = (item) => {
        if (user) {
            const cartItem = {
                itemId: id,
                email: user.email,
                name,
                price
            }

            axiosInstance.post('/cart', cartItem)
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
        <div className="card w-64 bg-base-100 shadow-xl border-2">
            <figure className="px-10 pt-10">
                <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>Category: {category}</p>
                <p>Price: {price}</p>
                <div className="card-actions">
                    <button className="btn btn-primary" onClick={() => handleAddToCart({ name, category, price })}>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default ComponentCard