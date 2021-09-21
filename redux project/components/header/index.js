import React from 'react'
import './header.css';

const Header = () => {
    return (
        <div className="header-container">
            <div className="header">
                <div className="header-logo">
                    Xpenser <i class="devicon-react-original"></i>
                </div>
                <div className="header-button">
                    <a href="https://github.com" target = "_blank" rel="noopener noreferrer">
                <i class="devicon-github-original colored">Star</i>
                </a>
                </div>
            </div>            
        </div>
    )
}

export default Header
