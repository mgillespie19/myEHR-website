import React, { Component } from 'react';

import './Root.css';
import Navbar from '../Navbar/Navbar';
import SideDrawer from '../HamburgerMenu/SideDrawer';
import Backdrop from '../Backdrop/Backdrop';
import Footer from '../Footer/Footer';



class Root extends Component {

  state = {
    sideDrawerOpen: false
  }

  toggleSideDrawer = () => {
    this.setState((prevState)=> {
      console.log("Root: "+!prevState.sideDrawerOpen)
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
        <div className="container">
            {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
}

export default Root;