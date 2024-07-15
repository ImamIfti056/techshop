import React, { useContext } from 'react'
import Title from '../../Shared/Title'
import { AuthContext } from '../../../providers/AuthProvider'

const Profile = () => {
    const { user } = useContext(AuthContext)
    return (
        <>
            <Title heading={"My Profile"} />

            <div className='bg-gray-200 py-8 px-12 my-12 text-center'>
                <h1 className='text-4xl my-4'>Name: {user.displayName}</h1>
                <h2 className='text-xl my-4'>Email: {user.email}</h2>
                <h2 className='text-md my-6'>Image Link: {user.photoURL}</h2>
            </div>
        </>
    )
}

export default Profile