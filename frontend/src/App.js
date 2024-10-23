import React, { useEffect, useState } from 'react';
import Home from './pages/Home';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/api/hello')
      .then(response => response.json())
      .then(data => setMessage(data.message));
  }, []);

  return (
    <div className="App">
      <Home />
      <p>{message}</p>
    </div>
  );
}

export default App;
