import axios from "axios";

export const axiosPublic = axios.create({
    baseURL: 'https://techshop-server-nine.vercel.app',
});


const useAxiosPublic = () => {
  return axiosPublic;
}

export default useAxiosPublic