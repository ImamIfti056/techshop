import React from 'react'
import useCart from '../../../hooks/useCart'
import { FaTrash } from 'react-icons/fa'
import Swal from 'sweetalert2'
import useAxios from '../../../hooks/useAxios'
import { Link } from 'react-router-dom'
import Title from '../../Shared/Title'

const Cart = () => {
    const [cart, refetch] = useCart()
    const axiosSecure = useAxios()

    const totalPrice = cart.reduce( (sum, current) => sum + current.price, 0)

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/cart/${id}`)
                    .then(res => {
                        if (res.data.deletedCount) {
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })


            }
        });
    }
    return (
        <div className='px-12'>
            <Title heading={'My Cart'} subheading={'Manage your products'} />
            <h3 className="text-xl mb-6">Total Products: {cart.length}</h3>
            <div className="overflow-x-auto mt-4">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Qunatity</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((item, idx) => (
                                <tr key={item._id}>
                                    <td>{idx + 1}</td>
                                    <td>{item.name}</td>
                                    <td>{item.category?.toUpperCase()}</td>
                                    <td>${item.price}</td>
                                    <td>1</td>
                                    <th><button onClick={() => handleDelete(item._id)} className="btn btn-ghost btn-xs"><FaTrash /></button></th>
                                </tr>
                            ))
                        }
                    </tbody>

                </table>
                <h3 className='text-2xl mt-12'>Total Price: ${totalPrice}</h3>
            </div>
        </div>
    )
}

export default Cart