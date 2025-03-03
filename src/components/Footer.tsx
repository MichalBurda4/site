import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-content">
                {/* Sekcja linków */}
                <div className="footer-links">
                    <Link to="/privacy">Polityka prywatności</Link>
                    <Link to="/terms">Regulamin</Link>
                    <Link to="/contact">Kontakt</Link>
                </div>

                {/* Informacje o prawach autorskich */}
                <p>© {currentYear} Firma Budowlana | Wszystkie prawa zastrzeżone</p>

                {/* Ikony Social Media */}
                <div className="footer-social">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                        <FaFacebookF size={20} />
                    </a>
                    <a href="https://www.linkedin.com/in/jacek-gil-223050144/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <FaLinkedinIn size={20} />
                    </a>
                    <a href="mailto:jacekgil@autograf.pl" aria-label="Email">
                        <FaEnvelope size={20} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
