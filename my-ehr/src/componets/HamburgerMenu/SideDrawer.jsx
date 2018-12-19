import React from 'react';
import './SideDrawer.css';
import {Link} from 'react-router-dom';


const sideDrawer = props => {
    let drawerClasses = 'side-drawer';
    if(props.showSideDrawer){
        drawerClasses = 'side-drawer open';
    }

    return(<nav className={drawerClasses}>
        <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/patient/'>Patient</Link></li>
        <li><Link to='/provider/'>Provider</Link></li>
        <li><Link to='/account/'>Account</Link></li>
            <div className="side-drawer-spacing"/>
        </ul>
    </nav>);
}

export default sideDrawer;
