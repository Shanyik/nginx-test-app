import { useState } from 'react';
import './App.css';

function App() {

  const [test, setTest] = useState(null)

  const handleOnClick = () => {
    fetch('http://localhost:5136/api/Test/test', {
      method: 'GET',
  })
      .then(response => {return response.text()})
      .then(data => {
          setTest(data)
          console.log(data);
      }
      )
      .catch(error => console.log(error))
  }

  return (
    
    <div className="App">
      <button onClick={() => {handleOnClick()}}>Test Connection</button>
      {
        test ? (
          <p>{test}</p>
        ) : (
          <p>Waiting for connection...</p>
        )
      }
    </div>
    
  );
}

export default App;
