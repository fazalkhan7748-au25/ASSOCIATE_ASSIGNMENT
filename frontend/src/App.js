import React, { Fragment } from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Header from'./components/Header/Header'
import Movies from './components/Movies/Movies';
import Create from './components/Movies/Create'

function App() {
  return (
    <Fragment>
      <BrowserRouter>
      <Header></Header>

      <Routes>

    <Route path = '/' element = {<Movies></Movies>}></Route>
    <Route path ='/create' element = {<Create></Create>}></Route>
    <Route path = '/read' element = {<Read></Read>}></Route> 






      </Routes>
      
      
      
      
      
      
      
      </BrowserRouter>








    </Fragment>
  );
}

export default App;
