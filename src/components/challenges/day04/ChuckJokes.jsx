import React, { useState } from 'react';
// import ChuckChild2 from './ChuckChild2';
import ChuckChild from './Chuckchild';
const ChuckJokes = () => {
  const [joke, setJoke] = useState('');

  function fetchJokes() {
    const url = 'https://api.chucknorris.io/jokes/random';

    fetch(url)
      .then((response) => response.json())
      .then((json) => setJoke(json.value));
    //       .then((json) => console.log);
  }

  return (
    <div>
      ChuckJokes Here{joke}
      <button onClick={fetchJokes}>Click for Jokes</button>
      <ChuckChild passedJoke={joke} />
      {/* {joke} */}
    </div>
  );
};

export default ChuckJokes;
