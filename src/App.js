import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCounter] = useState(0);
  return (
    <div className="App">
        <div>
          <p>{count}</p>
          <button onClick={() => setCounter(count + 1)}>Mohammad Anani</button>
        </div>
    </div>
  );
}

export default App;
