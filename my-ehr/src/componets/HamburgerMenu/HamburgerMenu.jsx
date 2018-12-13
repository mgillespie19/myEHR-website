import React from 'react';

import './HamburgerMenu.css';


const hamburgerMenu = props => {
    let hamburgerMenuClasses = "hamburgerMenu";
    if(props.showSideDrawer){
        hamburgerMenuClasses = "hamburgerMenu close";
    }
    return(<div className={hamburgerMenuClasses} id="hamburger" onClick={props.click}>
        <div className="hamburgerButton">
            <span className="line line1"></span>
            <span className="line line2"></span>
            <span className="line line3"></span>
        </div>
    </div>);
}
export default hamburgerMenu;