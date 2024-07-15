import { useQuery } from '@tanstack/react-query'
import { axiosSecure } from './useAxios'

const useAdminStats = () => {
  const {data: stats} = useQuery({
    queryKey: [],
    queryFn: async () => {
        const res = await axiosSecure.get('/admin-stats')
        return res.data
    }
  })
  return [stats]
}

export default useAdminStats