import React from 'react';

const Services: React.FC = () => {
    const services = [
        {
            title: "Przygotowanie inwestycji",
            description: "Kompleksowe opracowanie dokumentacji projektowej, analiza wykonalności, doradztwo w zakresie pozyskiwania pozwoleń budowlanych oraz opracowanie harmonogramów prac."
        },
        {
            title: "Kierownictwo budowy",
            description: "Nadzór nad realizacją inwestycji zgodnie z projektem i harmonogramem, koordynacja pracy zespołów budowlanych oraz kontrola jakości i terminowości wykonywanych robót."
        },
        {
            title: "Nadzór budowlany",
            description: "Monitorowanie postępu budowy, kontrola zgodności z przepisami prawa budowlanego oraz weryfikacja jakości materiałów i technologii stosowanych na placu budowy."
        },
        {
            title: "Kontrole stanu technicznego budynków",
            description: "Przeprowadzanie okresowych inspekcji budynków, ocena stanu technicznego konstrukcji oraz instalacji, sporządzanie raportów i zaleceń remontowych."
        },
        {
            title: "Prowadzenie książek obiektów budowlanych",
            description: "Dokumentowanie historii eksploatacji obiektów budowlanych, zarówno w formie tradycyjnej, jak i w systemie cyfrowym c-KOB, co ułatwia zarządzanie i monitorowanie stanu technicznego budynków."
        },
        {
            title: "Doradztwo w zakresie inwestycji wodno-kanalizacyjnych",
            description: "Pomoc w planowaniu i realizacji projektów infrastruktury wodno-kanalizacyjnej, w tym doradztwo techniczne, prawne oraz koordynacja procesu inwestycyjnego."
        }
    ];

    return (
        <section>
            <h2>O firmie</h2>
            <p>
                Firma budowlana Jan Kowalski działa na rynku od wielu lat, oferując kompleksowe
                usługi związane z inwestycjami budowlanymi. Specjalizujemy się w nadzorze, kierownictwie budowy
                oraz doradztwie inwestycyjnym w sektorze wodno-kanalizacyjnym.
            </p>
            <p>
                Naszym priorytetem jest wysoka jakość usług oraz pełna satysfakcja klientów.
                Dzięki wieloletniemu doświadczeniu i profesjonalizmowi, zdobyliśmy zaufanie wielu inwestorów.
            </p>

            <h2>Zakres działalności</h2>
            <ul>
                {services.map((service, index) => (
                    <li key={index}>
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Services;
