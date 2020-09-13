import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import About from './pages/about';
import Contact from './pages/contact';
import Drawings from './pages/drawings';
import Home from './pages/home';
import Oilpaintings from './pages/oilpaintings';



class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <div className="content-wrap">
            <Switch>
              <Route exact path= '/'  component={Home} />
              <Route exact path= '/pages/about'  component={About} />
              <Route exact path= '/pages/oilpaintings'  component={Oilpaintings} />
              <Route exact path= '/pages/drawings'  component={Drawings} />
              <Route exact path= '/pages/contact'  component={Contact} />
            </Switch>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    );  
  }
}

export default App;
