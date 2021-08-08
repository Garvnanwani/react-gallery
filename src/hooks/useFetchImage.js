import { useState, useEffect } from 'react'
import Axios from 'axios'

const api = import.meta.env.VITE_API_URL
const api_key = import.meta.env.VITE_API_KEY
const headers = { Authorization: api_key }

export default function useFetchImage(page, searchTerm) {
    const [images, setImages] = useState([])
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    function fetch(page, searchTerm) {
        const url =
            searchTerm === null ? 'curated' : `search?query=${searchTerm}`

        Axios.get(`${api}${url}?per_page=25&page=${page}`, {
            headers: headers,
        })
            .then((responce) => {
                searchTerm === null
                    ? fetchRandom(responce.data)
                    : fetchSearch(responce.data)
                setIsLoading(false)
            })
            .catch((e) => {
                setError(e.message)
                setIsLoading(false)
            })
    }

    function fetchSearch(data) {
        if (page > 1) {
            setImages([...images, ...data.photos])
        } else {
            setImages([...data.photos])
        }
    }

    function fetchRandom(data) {
        setImages([...images, ...data.photos])
    }

    useEffect(() => {
        setIsLoading(true)
        fetch(page, searchTerm)

        // cleanup function
        return () => {
            setIsLoading(false)
        }
    }, [page])

    return [images, setImages, error, isLoading, fetch]
}
