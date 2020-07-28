import React from 'react'
import {Link} from 'react-router-dom';
import '../styles/header.scss'

function Header(props) {
    return ( 
        <header>
            <nav>
                <div id="logo"><Link to="/" className="nav-link">{props.name}</Link></div>
                <div id="nav-links"><Link to={props.navLinks.link} className="nav-link">{props.navLinks.name}</Link></div>
            </nav>
            <article><p>Welcome to Quantity Measurement</p></article>
        </header>
    );
}
export default Header;