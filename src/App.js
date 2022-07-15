import React from 'react';
import Counter from './components/Counter'
import ClassCounter from './components/ClassCounter'

const App = () => { 
  return (
    <div className="App">
      <Counter/>
      <ClassCounter/>
    </div>
  );
}

export default App;
