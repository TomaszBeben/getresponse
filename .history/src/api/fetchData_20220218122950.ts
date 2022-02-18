import axios from "axios";
import { TPosts } from '../types/TPosts'

// const url: string = 'https://jsonplaceholder.typicode.com/posts';
const url: string = 'https://jsonplaceholder.typicode.cm/posts';

export const fetchData = (setPosts: (arg: TPosts[]) => void, setError: (arg: string) => void, setLoading: (arg: boolean) => void) => {
    axios.get(url)
        .then(({ data }) => {
            setLoading(true)
            setPosts(data)
            setError('')
            setLoading(false)
        }).catch((err) => {
            err.response.status === 404
                ? setError('resources not found')
                : setError('')
        })
}