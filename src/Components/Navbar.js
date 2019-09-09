import React, { Component } from 'react'
import './Navbar.css'


export default class Navbar extends Component {
    constructor(){
        super();
        this.state ={
            menu: false
        }
    }

    menuSlide = () => {
        this.setState({
            menu: !this.state.menu
        })
    }

    render() {
        return (
           <div main-nav-container>
           <nav className='navbar'>
                <div className='nav-title'>
                    <h1>Start Bootstrap</h1>
                </div>
                <div>
                   <button className='menu-btn' onClick={this.menuSlide}>MENU &#9776;</button>
                </div>
                <ul className='nav-menu'>
                    <li>SERVICES</li>
                    <li>PORTFOLIO</li>
                    <li>ABOUT</li>
                    <li>TEAM</li>
                    <li>CONTACT</li>
                </ul>
                
            </nav>
            <ul className=
                    {this.state.menu 
                    ? 'menu slide'
                    : 'menu'
                    }>
                    <li>SERVICES</li>
                    <li>PORTFOLIO</li>
                    <li>ABOUT</li>
                    <li>TEAM</li>
                    <li>CONTACT</li>
                </ul>
            </div>
        )
    }
}
