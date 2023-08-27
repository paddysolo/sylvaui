import React from "react";
import {ReactComponent as Logo} from "./../../../assets/sylvalogoui.svg";
import "./header.css";
import { NavLink } from "react-router-dom";

export const Header = ()=>{
    return (
    <header>
        <a href="#"
          >
        {/* <img
            src={logo}
            alt="logo"
            class="logo"
        /> */}
        <Logo />
        </a>
  
        <input type="checkbox" id="check" />
        <label for="check" class="icons">
          <i class="bx bx-menu" id="menu-icon"></i>
          <i class="bx bx-x" id="close-icon"></i>
        </label>
  
        <nav class="navbar">
    
          {/* <a href="#" class="nav-item" style={{"--i": 0}}>Projects</a> */}
          <NavLink className="nav-item"  to="/" style={({ isActive }) => ({  color: isActive ? '#EAB945' : '#58595B' })}>
              Projects
          </NavLink>
          <NavLink className="nav-item"  to="/about" style={({ isActive }) => ({  color: isActive ? '#EAB945' : '#58595B' })}>
              About
          </NavLink>
          {/* <a href="#" class="nav-item" style={{"--i": 1}}>About</a> */}
          <a  href="https://www.linkedin.com/in/sylvanus-odiakose-a57364166/" class="nav-item"     target="_blank" style={{"--i": 2}}>LinkedIn</a>
          <a href="#" class="nav-item download" style={{"--i": 3}}>Download CV</a>
        </nav>
      </header>
    )
}