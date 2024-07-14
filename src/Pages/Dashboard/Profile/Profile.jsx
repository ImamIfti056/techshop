import React, { useContext } from 'react'
import Title from '../../Shared/Title'
import { AuthContext } from '../../../providers/AuthProvider'

const Profile = () => {
    const { user } = useContext(AuthContext)
    return (
        <>
            <Title heading={"My Profile"} />

            <div className='bg-gray-200 p-8 my-12 text-center'>
                <h1 className='text-3xl'>Name: {user.displayName}</h1>
                <h2 className='text-xl'>Email: {user.email}</h2>
                <h2>Image Link: {user.photoURL}</h2>
            </div>
        </>
    )
}

export default Profile