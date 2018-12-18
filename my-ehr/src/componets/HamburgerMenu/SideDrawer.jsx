import React from 'react';
import './SideDrawer.css';

const sideDrawer = props => {
    let drawerClasses = 'side-drawer';
    if(props.showSideDrawer){
        drawerClasses = 'side-drawer open';
    }

    return(<nav className={drawerClasses}>
        <ul>
            <li><a href={process.env.PUBLIC_URL + '/'} >Home</a></li>
            <li onClick={props.scrollToAbout}><a href={process.env.PUBLIC_URL + '/About/'} >About</a></li>
            <li><a href={process.env.PUBLIC_URL + '/Patient/'} >Patient</a></li>
            <li><a href={process.env.PUBLIC_URL + '/Provider/'} >Provider</a></li>
            <li><a href={process.env.PUBLIC_URL + '/Account/'} >Account</a></li>
            <div className="side-drawer-spacing"/>
        </ul>
    </nav>);
}

export default sideDrawer;
