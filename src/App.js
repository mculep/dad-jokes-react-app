import './App.css';
import Header from './Header';
import JokeBtn from './JokeBtn';
import JokeHolder from './JokeHolder';
import { useState, useEffect } from 'react'

function App() {

  useEffect(() => {
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
      // setJoke(jokeData.joke);
    }
    getJoke();
  });

  const [joke, setJoke] = useState("knock knock");
  console.log(`This is the joke:`, joke);

  return (
    <div className="App">
      <Header />
      <JokeBtn />
      <JokeHolder joke={joke} />
    </div>
  );
}

export default App;
