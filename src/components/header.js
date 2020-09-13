import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import '../css/header.css';

class Header extends Component {
  render() {
    return (
      <header className="main-header">
          <NavLink to ='/pages/home' exact>
            <h1>
              FreeWomanStudio
            </h1>
          </NavLink>
          <menu className="mainmenu">
              <ul>
                  <li><NavLink to ='/pages/oilpaintings' exact activeStyle={
                    {borderTop: 'solid 3px #000'}
                      }>Oil Paintings</NavLink>
                  </li>
                  <li><NavLink to ='/pages/drawings' exact activeStyle={
                    {borderTop: 'solid 3px #000'}
                  }>Drawings</NavLink>
                  </li>
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

