import axios from "axios";
import { TPosts } from '../types/TPosts'

const url: string = 'https://jsonplaceholder.typicode.com/posts';

export const fetchData = (setPosts: (arg: TPosts[]) => void, setError: (arg: string) => void) => {
    axios.get(url)
        .then(({ data }) => {
            setPosts(data)
            setError('')
        }).catch((err) => {
            err.response.status === 404
                ? setError('resources not found')
                : setError('')
        })
}