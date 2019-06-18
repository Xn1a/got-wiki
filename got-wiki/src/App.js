import React from 'react';
import './App.css';
import BooksTable from './components/BooksTable';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Games of Thrones Wiki</h1>
        <h3>Books</h3>
      </header>
      <article>
        <BooksTable/>
      </article>
    </div>
  );
}

export default App;
