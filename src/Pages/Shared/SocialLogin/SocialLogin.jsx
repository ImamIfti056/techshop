import { useContext } from 'react'
import { FaGoogle } from 'react-icons/fa'
import { AuthContext } from '../../../providers/AuthProvider'
import { useNavigate } from 'react-router-dom'
import useAxiosPublic, { axiosPublic } from '../../../hooks/useAxiosPublic'

const SocialLogin = () => {
    const navigate = useNavigate()
    const axiosPublic = useAxiosPublic()
    const {signInWithGoogle} = useContext(AuthContext)
    const handleGoogleSignIn = () => {
      signInWithGoogle()
      .then((result) => {
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;
        const user = result.user;
        console.log('google user:', user)
        const userInfo={
          name: user?.displayName,
          email: user?.email
        }
        axiosPublic.post('/users', userInfo)
        .then(res=>{
          console.log(res.data, 'user added to db', userInfo)
          navigate('/')
        })
        .catch(err => console.log('user adding error', err))
      }).catch((error) => {
        console.log('google signin error', error)
      });
    }
  return (
    <div className='p-4 pt-0 w-full'>
        <button onClick={handleGoogleSignIn} className="btn w-full  text-black border-black "><FaGoogle/> Continue with Google</button> 

    </div>
  )
}

export default SocialLogin