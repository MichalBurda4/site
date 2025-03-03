import React from "react";
import { Link } from "react-router-dom";
import { FaAward, FaBuilding, FaClipboardCheck, FaUserTie, FaCertificate } from "react-icons/fa";

const AboutMe: React.FC = () => {
    return (
        <section className="about-me">
            <h2>O mnie</h2>
            <p>Jestem doświadczonym managerem i ekspertem w branży wodociągowej oraz budownictwie.</p>
            <ul>
                <li><FaAward size={20} /> Ponad 30 lat doświadczenia w zarządzaniu i budownictwie</li>
                <li><FaBuilding size={20} /> Właściciel Biura Inżynierskiego mgr inż. Jacek Gil</li>
                <li><FaClipboardCheck size={20} /> Były Prezes Zarządu Wodociągów Dębickich</li>
                <li><FaUserTie size={20} /> Wiceprzewodniczący Podkarpackiej Okręgowej Izby Inżynierów Budownictwa</li>
                <li><FaCertificate size={20} /> Uprawnienia budowlane i certyfikaty nadzorcze</li>
            </ul>
            <Link to="./pages/AboutMe" className="read-more">Czytaj więcej</Link>
        </section>
    );
};

export default AboutMe;
