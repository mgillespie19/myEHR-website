import React from 'react';
import './SideDrawer.css';




const sideDrawer = props => {
    let drawerClasses = 'side-drawer';
    if(props.showSideDrawer){
        drawerClasses = 'side-drawer open';
    }

    return(<nav className={drawerClasses}>
        <ul>
            <li><a href="/">Home</a></li>
            <li onClick={props.scrollToAbout}><a href="/about">About</a></li>
            <li><a href="/patient">Patient</a></li>
            <li><a href="/provider">Provider</a></li>
            <li><a href="/account">Account</a></li>
            <div className="side-drawer-spacing"/>
        </ul>
    </nav>);
}

export default sideDrawer;
