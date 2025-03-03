import React from 'react';
import ownerImage from '../assets/images/owner.jpg';

const ContactSection: React.FC = () => {
    return (
        <section className="contact-section">
            <div className="contact-container">
                {/* Zdjęcie właściciela */}
                <div className="contact-image">
                    <img src={ownerImage} alt="mgr inż. Jacek Gil"/>
                </div>

                {/* Podpis */}
                <h2 className="contact-name">mgr inż. Jacek Gil</h2>
                <p className="contact-title">Właściciel</p>

                {/* Informacje kontaktowe */}
                <div className="contact-info">
                    <p>📧 <a href="mailto:jacekgil@autograf.pl">jacekgil@autograf.pl</a></p>
                    <p>📞 +48 664 761 968</p>
                    <p>📍 39-200 Dębica, ul. Cisowa 4</p>
                    <p>NIP : 872-102-64-47, REGON : 850069539</p>
                </div>

                {/* Mapa Google */}
                <iframe
                    className="contact-map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2562.204227560579!2d21.414858776035043!3d50.045005416474446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473d098976650bdd%3A0x2b5b6b74f77600f9!2sCisowa%204%2C%2039-200%20D%C4%99bica!5e0!3m2!1spl!2spl!4v1740229263763!5m2!1spl!2spl"
                    allowFullScreen
                    loading="lazy"
                ></iframe>
            </div>
        </section>
    );
};

export default ContactSection;
