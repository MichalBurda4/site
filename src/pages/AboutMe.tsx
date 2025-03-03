import React from "react";
import { FaBriefcase, FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin } from "react-icons/fa";

const AboutMe: React.FC = () => {
    return (
        <main className="about-me-page">
            <h1>Jacek Gil</h1>
            <h3>Manager, Mgr inż. budownictwa | Ekspert w branży wodociągowej</h3>

            <section className="bio">
                <h2>O mnie</h2>
                <p>
                    Doświadczony manager z udokumentowanymi sukcesami w kierowaniu organizacjami i prowadzeniu własnej działalności.
                    Specjalizuję się w budownictwie oraz branży wodociągowej, a także w zarządzaniu zespołami i kontraktami.
                </p>
            </section>

            <section className="experience">
                <h2>Doświadczenie</h2>
                <ul>
                    <li><FaBriefcase /> Właściciel - Biuro Inżynierskie mgr inż. Jacek Gil (2025 - obecnie)</li>
                    <li><FaBriefcase /> Prezes Zarządu - Wodociągi Dębickie (2007 - 2024)</li>
                    <li><FaBriefcase /> Wiceprzewodniczący - Podkarpacka Okręgowa Izba Inżynierów Budownictwa (2006 - 2014)</li>
                    <li><FaBriefcase /> Zastępca Burmistrza Miasta Dębicy (1998 - 2002)</li>
                </ul>
            </section>

            <section className="skills">
                <h2>Umiejętności</h2>
                <ul>
                    <li>Zarządzanie przedsiębiorstwem i zespołem</li>
                    <li>Doskonalona wiedza z zakresu budownictwa</li>
                    <li>Umiejętności negocjacyjne i komunikacyjne</li>
                    <li>Znajomość branży wodociągowej</li>
                </ul>
            </section>

            <section className="certificates">
                <h2>Certyfikaty</h2>
                <ul>
                    <li>Uprawnienia budowlane w branży konstrukcyjno-budowlanej</li>
                    <li>Uprawnienia dla członków Rad Nadzorczych spółek Skarbu Państwa</li>
                </ul>
            </section>

            <section className="contact">
                <h2>Kontakt</h2>
                <p><FaMapMarkerAlt /> Cisowa 4, 39-200 Dębica</p>
                <p><FaPhone /> +48 664 761 968</p>
                <p><FaEnvelope /> jacekgil@autograf.pl</p>
                <p><FaLinkedin /> <a href="https://www.linkedin.com/in/jacek-gil-223050144/" target="_blank">LinkedIn</a></p>
            </section>
        </main>
    );
};

export default AboutMe;
