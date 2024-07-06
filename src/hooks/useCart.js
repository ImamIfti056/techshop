import { useQuery, useQueryClient } from "@tanstack/react-query"
import useAxios from "./useAxios"
import { useContext } from "react"
import { AuthContext } from "../providers/AuthProvider"

const useCart = () => {
    const axiosInstance = useAxios()
    const {user} = useContext(AuthContext)

    const { data: cart = [], refetch } = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async () => {
            const res = await axiosInstance.get(`/cart?email=${user.email}`);
            return res.data
        }
    })

    return [cart, refetch]
}

export default useCart