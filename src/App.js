import React, { useState, useEffect } from 'react';
import './App.css';

const api = 'https://recipe-challenge.netlify.app/.netlify/functions';

function App() {
  const [result, setResult] = useState({ loaded: false, recipe: {} });

  useEffect(() => {
    fetch(`${api}/recipe`)
      .then(response => response.json())
      .then(data => setResult({ loaded: true, recipe: data }))
  }, [])

  
  return (
    (result.loaded) ? (
    <div className="app">
      <header className="header">
        { result.recipe.title }
      </header>
    </div>
    ) : (
    <div className="app">
      LOADING
    </div>
    )
  );
}

export default App;
