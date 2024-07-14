import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

export const axiosSecure = axios.create({
  baseURL: 'http://localhost:5000',
});


const useAxios = () => {
  const navigate = useNavigate()
  const { logOut } = useContext(AuthContext)

  axiosSecure.interceptors.request.use(function (config) {
    const token = localStorage.getItem('access-token')
    // console.log('req stopped by interceptors', token)
    config.headers.authorization = `Bearer ${token}`;
    return config;
  }, function (err) {
    return Promise.reject(err)
  })

  //intercepts 401 and 403 status
  axiosSecure.interceptors.response.use(function (res) {
    return res;
  }, async (err) => {
    const status = err.response.status;
    console.log('error in response', status)
    //for err logout the user 
    if (status == 401 || status == 403) {
      await logOut()
      navigate('/login')
    }
    return Promise.reject(err)
  })

  return axiosSecure
}

export default useAxios