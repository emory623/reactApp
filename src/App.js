import {React, useState} from 'react';

import './styles/App.css';



const App = () => { 

  const [likes, setLikes] = useState(0)

  function incr() {
    setLikes(likes+1)
  }
  function decr() {
    setLikes(likes-1)
  }

  return (
    <div className="App">
      <h1>{likes}</h1>
      <button onClick={incr}>Incr</button>
      <button onClick={decr}>decr</button>
    </div>
  );

}




export default App;
