import axios from "axios";
import { TPosts } from '../types/TPosts'

const url: string = 'https://jsonplaceholder.typicode.com/posts';

export const fetchData = (
    setPosts: (arg: TPosts[]) => void,
    setError: (arg: string) => void,
    setLoading: (arg: boolean) => void,
    setTotalPages: (arg: number)=> void) => {
    setLoading(true)
    axios.get(url)
        .then(({ data }) => {
            setPosts(data)
            setError('')
            setLoading(false)
            setTotalPages(Math.ceil(data.length()))
        }).catch((err) => {
            err.response.status === 404
                ? setError('resources not found')
                : setError('')
        })
}