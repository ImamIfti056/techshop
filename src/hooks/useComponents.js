import { useQuery } from "@tanstack/react-query"
import { axiosPublic } from "./useAxiosPublic"

export const useComponenets = () => {
    // const [components, setComponents] = useState([])
    // const [loading, setLoading] = useState(true)

    // useEffect(() => {
    //     fetch('http://localhost:5000/components')
    //         .then(res => res.json())
    //         .then(data => {
    //             setComponents(data)
    //             setLoading(false)
    //         })
    // }, [])

    const {data: components=[], isPending: loading, refetch} = useQuery({
        queryKey: ['components'],
        queryFn: async () =>{
            const res = await axiosPublic.get('/components')
            return res.data
        }
    })

    return [components, loading]
}