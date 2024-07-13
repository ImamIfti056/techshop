import { useQuery } from "@tanstack/react-query"
import { useContext } from "react"
import { AuthContext } from "../providers/AuthProvider"
import useAxios from "./useAxios"

const useAdmin = () => {
    const { user } = useContext(AuthContext)
    const axiosSecure = useAxios()
    const { data: isAdmin, isPending: isAdminLoading } = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        queryFn: async () => {
            const res = await axiosSecure.get(`users/admin/${user.email}`)
            return res.data?.admin
        }
    })

    return [isAdmin]
}

export default useAdmin