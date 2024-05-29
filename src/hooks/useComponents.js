import { useEffect, useState } from "react"

export const useComponenets = () => {
    const [components, setComponents] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('http://localhost:5000/components')
            .then(res => res.json())
            .then(data => {
                setComponents(data)
                setLoading(false)
            })
    }, [])

    return [components, loading]
}