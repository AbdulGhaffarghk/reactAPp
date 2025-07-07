import React from 'react';
import '../styles.css';

const currentYear = new Date().getFullYear();

export default function Footer() {
    return (
        <footer className="footer">
            <p className='footer-text'>© {currentYear} MoviesDuck</p>
            <p>Made with ❤️ by Abdul Ghaffar</p>
            </footer>
    );
}   