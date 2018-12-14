import React, { Component } from 'react';
import './App.css';
import Root from './componets/pages/Root';
import Home from './componets/pages/Home/Home';



class App extends Component {
  
  render() {
    return (
      <Root>
        <Home/>
      </Root>  
    );
  }
}

export default App;
