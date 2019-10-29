import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import TodosList from '../src/components/todos-list.component';
import EditTodo from './components/edit-todo.component';
import CreateTodo from '../src/components/create-todo.component';

import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

export default function App() {
  return (
    <Router>
      <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="/"  target="_blank">
            </a>
            <Link to="/" className="navbar-brand">MERN-Stack Todo App</Link>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Todos</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">Create Todo</Link>
                </li>
              </ul>
            </div>
          </nav>
          <br/>
       <Route path="/" component={TodosList} />
       <Route path="/edit/:id" component={EditTodo} />
       <Route path="/create" component={CreateTodo} />
      </div>
    </Router>
  );
}
