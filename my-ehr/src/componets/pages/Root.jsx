import React, { Component } from 'react';
import scrollToComponent from 'react-scroll-to-component';

import './Root.css';
import Navbar from '../Navbar/Navbar';
import SideDrawer from '../HamburgerMenu/SideDrawer';
import Backdrop from '../Backdrop/Backdrop';
import Footer from '../Footer/Footer';



class Root extends Component {
  constructor(props){
    super(props)
    this.state = {
      sideDrawerOpen: false,
    }
    this.aboutRef = this.props.aboutRef
  }

  toggleSideDrawer = () => {
    this.setState((prevState)=> {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  }

  closeSideDrawer = () => {
    this.setState({sideDrawerOpen: false});
  }

  scrollToAbout = () => {
    this.closeSideDrawer()

    scrollToComponent(this.aboutRef.current, {
      align: 'top',
      offset: -84,
      duration: 1000,
    });
  }

  render() {

    let backdrop;

    if(this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.closeSideDrawer} />;
    }

    return (
      <div className="app">
        <Navbar toggleSideDrawer={this.toggleSideDrawer} scrollToAbout={this.scrollToAbou} showSideDrawer={this.state.sideDrawerOpen}/>
        <SideDrawer showSideDrawer={this.state.sideDrawerOpen} scrollToAbout={this.scrollToAbout} toggleSideDrawer={this.toggleSideDrawer}/>
        {backdrop}
        <div className="container">
            {this.props.children}
        </div>
        <Footer/>
      </div>
    );
  }
}

export default Root;
