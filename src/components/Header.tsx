import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaTools, FaPhoneAlt, FaUser } from 'react-icons/fa';

declare module 'react-icons/fa';

const Header: React.FC = () => {
    return (
        <header className="header">
            <h1>Jacek Gil Nadzór Budowalny</h1>
            <nav>
                <ul className="nav-icons">
                    <li>
                        <Link to="/">
                            <FaHome size={70} className="icon"/>
                            <span>Strona główna</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/services">
                            <FaTools size={70} className="icon"/>
                            <span>Zakres działalności</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/aboutme">
                            <FaUser size={70} className="icon"/>
                            <span>O mnie</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact">
                            <FaPhoneAlt size={70} className="icon"/>
                            <span>Kontakt</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;