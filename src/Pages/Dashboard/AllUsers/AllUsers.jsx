import React, { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import useAxios from '../../../hooks/useAxios'
import { FaTrash, FaUser } from 'react-icons/fa'
import Swal from 'sweetalert2'
import Title from '../../Shared/Title'
import './AllUsers.css'

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
        Swal.fire({
            title: `Are you sure to make ${user.name} admin?`,
            text: "",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes!"
        }).then(result => {
            if (result.isConfirmed) {
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
        })

    }

    const handleDelete = (id) => {
        console.log(id)
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
                axiosSecure.delete(`/users/${id}`)
                    .then(res => {
                        if (res.data.deletedCount) {
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: "User deleted.",
                                icon: "success"
                            });
                        }
                    })


            }
        });
    }

    return (
        <div className='px-12'>
            <Title heading={'All Users'} subheading={'Manage all users from your website'} />
            <h3 className="text-xl mb-6">Total Users: {users.length}</h3>
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

