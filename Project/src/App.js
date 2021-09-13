import React from 'react';
import Navbar from './layouts/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './layouts/Footer';
import './App.css';

//React Router Import 

import {Switch, Route} from 'react-router-dom';

//Import Pages
import Home from './components/pages/Home';
import News from './components/pages/News';
import Contact from './components/pages/Contact';
import Details from './components/pages/Details';
import NotFoundPage from './components/pages/NotFoundPage';

function App() {
  return (<>
    <Navbar/>
    <Switch>
      <Route exact path="/home" component={Home}/>
      <Route path="/news" component={News}/>
      <Route path="/contact-us" component={Contact}/>
      <Route path="/details" component={Details}/>
      <Route component={NotFoundPage}/>
    </Switch>
    <Footer/>
    </>
  );
}

export default App;
