import { useState } from 'react'
import { useFetch } from '../hooks/useFetch.js'
//styles
import './TripList.css'

export default function TripList() {

    // const [trips, setTrip] = useState([])
    const [url, setUrl] = useState('http://localhost:3000/trips')
    const { data: trips, isPending, error } = useFetch(url, { type: 'GET' })
    // const fetchTrips = useCallback(async () => {
    //     const response = await fetch(url)
    //     const json = await response.json()
    //     setTrip(json)
    // }, [url])

    // useEffect(() => {
    //     fetchTrips()
    // }, [fetchTrips])



    return (
        <div className="trip-list">
            <h1>Trip List</h1>
            {isPending && <div>Loading trips...</div>}
            {error && <div>{error}</div>}
            <ul>
                {trips && trips.map((trip) => (
                    <li key={trip.id}>
                        <h3>{trip.title}</h3>
                        <p>{trip.price}</p>
                    </li>
                )
                )}
            </ul>

            <div className="filters">
                <button onClick={() => {
                    setUrl('http://localhost:3000/trips?loc=european')
                }}>
                    Europe trip
                </button>
                <button onClick={() => {
                    setUrl('http://localhost:3000/trips')
                }}>
                    All trip
                </button>
            </div>
        </div>
    )
}
