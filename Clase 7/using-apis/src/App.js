import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [people, setPeople] = useState()
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    fetch('https://swapi.dev/api/people/')
    .then((resp) => resp.json())
    .then((res) => {
      setPeople(res.results)
      setIsLoading(false)
    })
  }, [setIsLoading])

  return (
    <div className="App">
      <h1>SWAPI</h1>
      {
        isLoading 
        ? <p>Loading ...</p> 
        : people?.map((character, index) => {
            return (
              <h1 key={index}>{character.name}</h1>
            )
          })
      }
    </div>
  );
}

export default App;
