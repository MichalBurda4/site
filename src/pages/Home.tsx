import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // ✅ Import Framer Motion
import AboutMe from "../components/AboutMe.tsx";
import ContactSection from "../components/ContactSection.tsx";


const Home: React.FC = () => {
    return (
        <main className="home">
            {/* ✅ Hero Section z animacjami */}
            <section
                className="relative h-screen flex flex-col items-center justify-center text-white bg-cover bg-center"
                style={{backgroundImage: "url('/images/construction-bg.jpg')"}}
            >
                <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>

                <motion.h1
                    initial={{opacity: 0, y: -50}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 1}}
                    className="text-6xl font-bold relative z-10"
                >
                    Profesjonalne Usługi Budowlane
                </motion.h1>

                <motion.p
                    initial={{opacity: 0, y: 30}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 1.2}}
                    className="mt-4 text-lg relative z-10"
                >
                    Doświadczenie i precyzja w każdej realizacji.
                </motion.p>

                <motion.a
                    href="/services"
                    className="mt-6 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white text-lg font-semibold rounded-md transition relative z-10"
                    initial={{opacity: 0, scale: 0.8}}
                    animate={{opacity: 1, scale: 1}}
                    transition={{duration: 1.3}}
                >
                    Sprawdź nasze usługi
                </motion.a>
            </section>

            {/* ✅ Sekcja "O firmie" z animacją przewijania */}
            <motion.section
                initial={{opacity: 0, y: 50}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 1}}
                className="content py-20 bg-gray-100 text-center"
            >
                <h2 className="text-4xl font-bold text-gray-800">O firmie</h2>
                <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
                    Firma budowlana Jan Kowalski działa na rynku od wielu lat, oferując kompleksowe
                    usługi związane z inwestycjami budowlanymi. Specjalizujemy się w nadzorze, kierownictwie budowy
                    oraz doradztwie inwestycyjnym w sektorze wodno-kanalizacyjnym.
                </p>
                <p className="mt-2 max-w-3xl mx-auto text-lg text-gray-600">
                    Naszym priorytetem jest wysoka jakość usług oraz pełna satysfakcja klientów.
                    Dzięki wieloletniemu doświadczeniu i profesjonalizmowi, zdobyliśmy zaufanie wielu inwestorów.
                </p>
                <Link to="/services" className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-md text-lg">
                    Czytaj więcej
                </Link>
            </motion.section>

            {/* ✅ Sekcja "O mnie" z animacją */}
            <motion.div
                initial={{opacity: 0, scale: 0.9}}
                whileInView={{opacity: 1, scale: 1}}
                transition={{duration: 1}}
            >
                <AboutMe/>
            </motion.div>

            {/* ✅ Sekcja kontaktowa */}
            <motion.div
                initial={{opacity: 0, y: 50}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 1}}
            >
                <ContactSection/>
            </motion.div>

        </main>
    );
};

export default Home;
