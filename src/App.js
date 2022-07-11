import React, {useState} from 'react';
import './App.css';

function App() {

  const [likes, setLikes] = useState(0);
  const [value, setValue] = useState('введите текст...')

  const increment = () =>{setLikes(likes + 1)};
  const decrement = () =>{setLikes(likes - 1)};


  return (
    <div className="App">
      <h1>Likes: {likes}</h1>
      <h2>{value}</h2>
      <input type="text" value={value} onChange={event => setValue(event.target.value)}/>
      <button onClick= {increment}>increment</button>
      <button onClick= {decrement}>decrement</button>
    </div>
  );
}

export default App;
