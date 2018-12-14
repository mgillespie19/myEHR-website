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
            <li><a href="/">About</a></li>
            <li><a href="/">Patient</a></li>
            <li><a href="/">Provider</a></li>
            <li><a href="/">Account</a></li>
            <div className="side-drawer-spacing"/>
        </ul>
    </nav>);
}

export default sideDrawer;
