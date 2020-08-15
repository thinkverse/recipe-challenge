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
    <div className="app recipe">
      <header className="header">
        <h1>{ result.recipe.title }</h1>
      </header>
      <aside className="description">
        <span class="material-icons">
          drag_indicator
        </span>
        <p>{ result.recipe.description }</p>
      </aside>
      <figure className="cover-image">
        <img src="./img/photo1.png" alt="{ result.recipe.title }" />
      </figure>
      <section className="meta">
        <div className="meta__item meta__item--full">
          <i className="material-icons">local_dining</i>
          <div className="meta__body">
            <header>
              Yields
            </header>
            <span>
              { result.recipe.meta.yields } Servings
            </span>
          </div>
        </div>
        <div className="meta__item">
          <i className="material-icons">schedule</i>
          <div className="meta__body">
            <header>
              Prep time
            </header>
            <span>
              { result.recipe.meta.prep } minutes
            </span>
          </div>
        </div>
        <div className="meta__item">
          <i className="material-icons">schedule</i>
          <div className="meta__body">
            <header>
              Cook time
            </header>
            <span>
              { result.recipe.meta.cook / 60 } hour
            </span>
          </div>
        </div>
        <div className="meta__item">
          <i className="material-icons">schedule</i>
          <div className="meta__body">
            <header>
              Total time
            </header>
            <span>
              { result.recipe.meta.total / 60 } hours
            </span>
          </div>
        </div>
      </section>
    </div>
    ) : (
    <div className="app">
      LOADING
    </div>
    )
  );
}

export default App;
