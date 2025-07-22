import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import '../Css/Navbar.css'; // Keep this only if the CSS file is used

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="app-container">
            <nav className="navbar">
                <div className="navbar-container">
                    <div className="navbar-content">
                        <div className="logo-container">
                            <img src="/logo.png" alt="Logo" className="logo-image" />
                        </div>

                        {/* Desktop Menu */}
                        <div className="desktop-menu">
                            <div className="desktop-menu-list">
                                {['Home', 'Schemes', 'About', 'Contact'].map((item) => (
                                    <a
                                        key={item}
                                        href={`#${item.toLowerCase()}`}
                                        className="nav-link"
                                    >
                                        {item}
                                        <span className="nav-link-underline"></span>
                                        <span className="nav-link-underline-delayed"></span>
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="mobile-menu-button-container">
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="mobile-menu-button"
                                aria-label="Toggle menu"
                            >
                                {isMenuOpen ? <X className="mobile-menu-icon" /> : <Menu className="mobile-menu-icon" />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="mobile-menu">
                        <div className="mobile-menu-content">
                            {['Home', 'Schemes', 'About', 'Contact'].map((item) => (
                                <a
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    className="mobile-nav-link"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item}
                                </a>
                            ))}
                        </div>
                    </div>
                )}
            </nav>
        </div>
    );
};

export default Navbar;
