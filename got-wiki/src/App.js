import React from 'react';
import './App.css';
import BooksTable from './components/BooksTable';
import BookDetails from './components/BookDetails';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Games of Thrones Wiki</h1>
        </header>
        <article>
          <Switch>
            <Route path={"/"} exact component={BooksTable} />
            <Route path={"/book/:id"} exact component={BookDetails} />
          </Switch>
        </article>
      </div>
    </Router>
  );
}

export default App;