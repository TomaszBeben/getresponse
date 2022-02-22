import axios from "axios";
import { TPosts } from '../components/types/TPosts'

const url: string = "https://retoolapi.dev/HgsPSQ/data"; //example api

export const fetchData =( setPosts: (arg: TPosts[]) => void, setError: (arg: string) => void, setLoading: (arg: boolean) => void ) => {
    setLoading(true)
    axios.get(url)
        .then(({ data }) => {
            setPosts(data)
            setError('')
            setLoading(false)
        }).catch((err) => {
            err.response.status === 404
                ? setError('resources not found')
                : setError('')
        })
}