import React, { Component } from 'react';

import './App.css';
import Navbar from './componets/Navbar/Navbar';
import SideDrawer from './componets/HamburgerMenu/SideDrawer';
import Backdrop from './componets/Backdrop/Backdrop';



class App extends Component {

  state = {
    sideDrawerOpen: false
  }

  toggleSideDrawer = () => {
    this.setState((prevState)=> {
      console.log(!prevState.sideDrawerOpen)
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  }

  closeSideDrawer = () => {
   this.setState({sideDrawerOpen: false});
  }


  render() {

    let backdrop;

    if(this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.closeSideDrawer} />;
    }

    return (
      <div className="app">
        <Navbar toggleSideDrawer={this.toggleSideDrawer} showSideDrawer={this.state.sideDrawerOpen}/>
        <SideDrawer showSideDrawer={this.state.sideDrawerOpen}/>
        {backdrop}
      </div>
    );
  }
}

export default App;
