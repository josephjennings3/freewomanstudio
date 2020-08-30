import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import '../css/header.css';

class Header extends Component {
  render() {
    return (
      <header className="main-header">
          <h1>
            FreeWomanStudio
          </h1>
          <menu className="mainmenu">
              <ul>
                  <li>
                  <NavLink to ='/pages/home' exact activeStyle={
                    {borderTop: 'solid 3px #000'}
                  }>Home</NavLink>
                  </li>
                  <li><NavLink to ='/pages/gallery' exact activeStyle={
                    {borderTop: 'solid 3px #000'}
                  }>Gallery</NavLink></li>
                  <li><NavLink to ='/pages/about' exact activeStyle={
                    {borderTop: 'solid 3px #000'}
                  }>About</NavLink></li>
                  <li><NavLink to ='/pages/contact' exact activeStyle={
                    {borderTop: 'solid 3px #000'}
                  }>Contact</NavLink></li>
                </ul>
          </menu>
      </header>
    );
  }
}

export default (Header);

