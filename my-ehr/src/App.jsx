import React, { Component } from 'react';
import './App.css';
import Root from './componets/pages/Root';
import Home from './componets/pages/Home/Home';
import About from './componets/pages/About/About';



class App extends Component {
  constructor(props) {
    super(props);
    this.aboutRef = React.createRef();
  }
 
  render() {
    return (
      <Root aboutRef={this.aboutRef}>
        <Home/>
        <About aboutRef={this.aboutRef}/>
      </Root>
    );
  }
}

export default App;
