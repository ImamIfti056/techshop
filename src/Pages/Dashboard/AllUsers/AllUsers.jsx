import React, { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import useAxios from '../../../hooks/useAxios'
import { FaTrash, FaUser } from 'react-icons/fa'
import Swal from 'sweetalert2'

const AllUsers = () => {
    const axiosSecure = useAxios()

    const { data: users = [], refetch } = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users`);
            return res.data
        }
    })

    const handleMakeAdmin = user => {
        axiosSecure.patch(`/users/admin/${user._id}`)
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is an admin now`,
                        showConfirmButton: false,
                        timer: 1000
                    });
                }
            })
    }

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure to delete this user?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosInstance.delete(`/cart/${id}`)
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
        <div>
            AllUsers: {users.length}
            <table className="table">
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, idx) => (
                            <tr key={user._id}>
                                <td>{idx + 1}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                {user.role == 'admin' ? 
                                    <td>Admin</td> : 
                                    <td><button onClick={() => handleMakeAdmin(user)} className="btn btn-ghost btn-xs"><FaUser /></button></td>
                                    }
                                <th><button onClick={() => handleDelete(user._id)} className="btn btn-ghost btn-xs"><FaTrash /></button></th>
                            </tr>
                        ))
                    }
                </tbody>

            </table>
        </div>
    )
}

export default AllUsers

