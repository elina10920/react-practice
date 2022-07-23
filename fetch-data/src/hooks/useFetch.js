import { useState, useEffect, useRef } from 'react'


export const useFetch = (url, _options) => {
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)

    // use useRef to wrap an object/array argument
    // which is a useEffect dependency 
    const options = useRef(_options).current


    useEffect(() => {
        const controller = new AbortController()
        const fetchData = async () => {

            setIsPending(true)
            try {
                const response = await fetch(url, { signal: controller.signal })
                console.log(response)
                if (!response.ok) {
                    throw new Error(response.statusText)
                }
                const json = await response.json()

                setIsPending(false)
                setData(json)
                setError(null)

            } catch (error) {
                if (error.name === "AbortError") {
                    console.log("the fetch was aborted")
                } else {
                    setIsPending(false)
                    setError('Could not fetch the data')
                }
            }

        }
        fetchData()

        return () => {
            controller.abort()
        }
    }, [url, options])

    return { data, isPending, error }
}
