import React from 'react'
import './style.css'
import logo from './assets/logo.png'

function header() {
    return (
        <div className= 'container stick'>
            
            <div className="row">
                <div className="column">
                    <img src={logo} width={100} height={100}></img>
                </div>
                <div className="column1">
                    <ul className= "menu">
                            <li className="menu_links"><a href="#hero">Home</a></li>
                            <li className="menu_links"><a href="#about">About</a></li>
                            <li className="menu_links"><a href="#service">Services</a></li>
                            <li className="menu_links"><a href="#skills">Skills</a></li>
                            <li className="menu_links"><a href="#portfolio">Portfolio</a></li>
                            <li className="menu_links"><a href="#contact">Contact</a></li>
                    </ul>

                    <ul className= "mobile_menu">
                        <i className="fa fa-bars" id="bars" onClick={toggleMenu}></i>
                        <div id="m_menu">
                            <li className="menu_links"><a href="#hero">Home</a></li>
                            <li className="menu_links"><a href="#about">About</a></li>
                            <li className="menu_links"><a href="#service">Services</a></li>
                            <li className="menu_links"><a href="#skills">Skills</a></li>
                            <li className="menu_links"><a href="#portfolio">Portfolio</a></li>
                            <li className="menu_links"><a href="#contact">Contact</a></li>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
        
    )

    function toggleMenu(){
        var x = document.getElementById('m_menu');
        if(x.style.display === 'none'){
            x.style.display = "block";
        }else{
            x.style.display = "none";
        }
    }
}

export default header
