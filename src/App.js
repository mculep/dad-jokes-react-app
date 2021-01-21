import './App.css';
import Header from './Header';
import JokeBtn from './JokeBtn';
import JokeHolder from './JokeHolder';
import { useState, useEffect } from 'react'

function App() {
  const [joke, setJoke] = useState("");
  async function getJoke() {
    // fetch the joke
    const jokePromise = fetch('https://icanhazdadjoke.com', {
      headers: {
        Accept: 'application/json'
      }
    });
    const response = await jokePromise;
    const jokeData = await response.json();
    console.log(jokeData.joke);
    setJoke(jokeData.joke);
  }
  useEffect(() => {
    getJoke();
  }, []);


  console.log(`This is the joke:`, joke);

  return (
    <div className="App">
      <Header />
      <JokeBtn getJoke={getJoke} />
      <JokeHolder joke={joke} />
    </div>
  );
}

export default App;
