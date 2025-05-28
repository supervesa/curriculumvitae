import React from 'react';

// Oletetaan, että CSS-tiedostosi (esim. global.css tai Numbers.css),
// joka sisältää .numbers-section, .numbers-card, .numbers-card__icon jne. luokat,
// on tuotu globaalisti App.jsx:ssä tai index.js:ssä.

const numberData = [
    {
        iconClass: "fas fa-home", // VAIN Font Awesome -luokat
        number: "20",
        text: "vuoden monipuolinen kokemus ihmisten, prosessien ja projektien parissa, aina ratkaisukeskeisesti."
    },
    {
        iconClass: "fas fa-cogs", // VAIN Font Awesome -luokat
        number: "9",
        text: "erilaista työroolia vuodesta 2013, osoittaen vahvaa sopeutumiskykyä ja halua oppia uutta eri toimialoilla."
    },
    {
        iconClass: "fas fa-lightbulb", // VAIN Font Awesome -luokat
        number: "4+",
        text: "keskeistä asiantuntija-aluetta hallussa: Markkinointi & Viestintä, Graafinen suunnittelu & Projektinhallinta."
    },
    {
        iconClass: "fas fa-tools", // VAIN Font Awesome -luokat
        number: "11+",
        text: "ammattilaisen työkalua ja järjestelmää sujuvasti käytössä (Adobe CC, Office 365, Valtion järjestelmät ym.)."
    },
    {
        iconClass: "fas fa-handshake", // VAIN Font Awesome -luokat
        number: "8",
        text: "erilaista luottamustehtävää useissa eri organisaatioissa, osoittaen sitoutumista yhteiskunnalliseen vaikuttamiseen."
    },
    {
        iconClass: "fas fa-comments", // VAIN Font Awesome -luokat
        number: "3+",
        text: "kielen taito avaa ovia ja mahdollistaa sujuvan viestinnän eri tilanteissa."
    },
    {
        iconClass: "fas fa-smile-beam", // VAIN Font Awesome -luokat
        number: "\"Oy!\"",
        text: "...with the poodles already! Koska huumorintaju ja positiivinen asenne tekevät haasteistakin mahdollisuuksia."
    }
];

// Yksittäinen numerokortti
const NumberCard = ({ iconClass, number, text }) => {
    return (
        // Käytetään luokkaa 'numbers-card' yksittäiselle kortille
        <div className="numbers-card">
            {/* Yhdistetään Font Awesome -luokat ja oma tyyliluokka */}
            {iconClass && <i className={`${iconClass} numbers-card__icon`}></i>}
            <div className="numbers-card__highlight">{number}</div>
            <p className="numbers-card__text">{text}</p>
        </div>
    );
};

// Koko "Minä numeroina" -osio
const NumbersSection = () => {
    return (
        // Pääsection-elementti, joka perii globaalit 'section'-tyylit
        <section className="numbers-section">
            {/* Sisäinen kontaineri keskitystä ja max-leveyttä varten */}
            <div className="numbers-section__container">
                <h2 className="numbers-section__title">
                    Minä numeroina – Vesa Nessling
                </h2>
                {/* Grid-layout korteille */}
                <div className="numbers-section__grid">
                    {numberData.map((item, index) => (
                        <NumberCard
                            key={index}
                            iconClass={item.iconClass}
                            number={item.number}
                            text={item.text}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default NumbersSection;
