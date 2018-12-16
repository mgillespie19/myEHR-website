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
            <li onClick={props.scrollToAbout}><a href="/">About</a></li>
            <li><a href="/Patient">Patient</a></li>
            <li><a href="/Provider">Provider</a></li>
            <li><a href="/Account">Account</a></li>
            <div className="side-drawer-spacing"/>
        </ul>
    </nav>);
}

export default sideDrawer;
