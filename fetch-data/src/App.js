import './App.css'
import { useState } from 'react'
import TripList from './components/TripList'

function App() {
  const [showTrips, setShowTrips] = useState(true)

  return (
    <div className="App">
      <button onClick={() => setShowTrips(false)}>hide trip</button>
      {showTrips && <TripList />}
    </div>
  );
}

export default App