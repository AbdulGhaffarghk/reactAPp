import React from 'react';
import logo from '../logo.png';
import '../styles.css';

export default function Header() {
    return (
        <header className="App-header">
            <img src={logo} className="logo" alt="logo" />
           
        </header>
    );
}