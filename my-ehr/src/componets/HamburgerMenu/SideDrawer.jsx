import React from 'react';
import './SideDrawer.css';
import {Link} from 'react-router-dom';


const sideDrawer = props => {
    let drawerClasses = 'side-drawer';
    if(props.showSideDrawer){
        drawerClasses = 'side-drawer open';
    }

    return(
        <nav className={drawerClasses}>
            <ul>
                <li onClick={props.closeSideDrawer}><Link to='/'>Home</Link></li>
                <li onClick={props.closeSideDrawer}><Link to='/about/'>About</Link></li>
                <li onClick={props.closeSideDrawer}><Link to='/patient/'>Patient</Link></li>
                <li onClick={props.closeSideDrawer}><Link to='/provider/'>Provider</Link></li>
                <li onClick={props.closeSideDrawer}><Link to='/faq/'>FAQ</Link></li>
                <li onClick={props.closeSideDrawer}><Link to='/account/'>Account</Link></li>
                <div className="side-drawer-spacing"/>
            </ul>
        </nav>
    );
}

export default sideDrawer;
