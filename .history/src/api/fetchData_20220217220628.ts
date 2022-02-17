import axios from "axios";
// import { TUser } from '../types/TUser'

const url: string = 'https://jsonplaceholder.typicode.com/posts';

export const fetchData = (setUsers: (arg: TUser[]) => void, setError: (arg: string) => void) => {
    axios.get(url)
        .then(({ data }) => {
            setUsers(data)
            setError('')
        }).catch((err) => {
            err.response.status === 404
                ? setError('resources not found')
                : setError('')
        })
}