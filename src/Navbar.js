import React, { Component } from 'react';
import "./Navbar.css";

class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = { }
    }
    render(){
        return(
            <div className='NavBar'>
                <a href="/">Palette Generator</a>
                <a href="/about">About</a>
                <a href="/contact">Contact</a>
            </div>
        );
    }
}
export default Nav; 