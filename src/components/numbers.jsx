import React from 'react';

// Oletetaan, että CSS-tiedostosi (esim. global.css tai Numbers.css),
// joka sisältää .numbers-section, .numbers-card, .numbers-card__icon jne. luokat,
// on tuotu globaalisti App.jsx:ssä tai index.js:ssä.

const numberData = [
    {
        iconClass: "fas fa-home", // VAIN Font Awesome -luokat
        number: "20",
        text: "vuoden laaja-alainen kokemus asiakaspalvelusta, niin yksityisellä kuin julkisellakin sektorilla – ratkaisukeskeisyys edellä."
    },
    {
        iconClass: "fas fa-cogs", // VAIN Font Awesome -luokat
        number: "12+",
        text: "erilaista työroolia kahdenkymmenen vuoden ajalta, vahvaa sopeutumiskykyä ja jatkuvaa halua oppia uutta eri toimialoilta."
    },
    {
        iconClass: "fas fa-lightbulb", // VAIN Font Awesome -luokat
        number: "4+",
        text: "keskeistä asiantuntija-aluetta vankasti hallussa: Markkinointi & Viestintä, Graafinen suunnittelu & Asiakasrajapintatyöskentely."
    },
    {
        iconClass: "fas fa-tools", // VAIN Font Awesome -luokat
        number: "15+",
        text: "ammattilaisen työkalua ja järjestelmää sujuvassa käytössä – sähköpostin tehokäytöstä vaativaan kuvan käsittelyyn ja kevyeen koodaukseen."
    },
        {
        iconClass: "fas fa-graduation-cap", // Koulutus (tutkinnot)
        number: "4", // Ylioppilas, Restonomi, Teol. kand., Teol. maisteri
        text: "tutkintoa maisteritasolle asti, luoden vankan akateemisen perustan ja kyvyn hallita laajoja kokonaisuuksia."
    },
    {
        iconClass: "fas fa-certificate", // Lisäkoulutus/Kurssit
        number: "90+", // Arvioitu ECTS-määrä (esim. Kasvatustiede 25 op + Psykologia 25 op = 50 op)
        text: "opintopistettä täydentävistä yliopisto-opinnoista sekä erilaisia lyhyempiä lisäkursseja, ilmentäen jatkuvaa osaamisen kehittämistä."
    },

   
    {
        iconClass: "fas fa-comments", // VAIN Font Awesome -luokat
        number: "3+",
        text: "kielitaitoa, jotka avaavat ovia ja varmistavat sujuvan viestinnän monenlaisissa tilanteissa."
    },
     {
        iconClass: "fas fa-handshake", // VAIN Font Awesome -luokat
        number: "8",
        text: "erilaista luottamustehtävää useissa organisaatioissa, ilmentäen sitoutumista yhteiskunnalliseen vaikuttamiseen ja yhteistyöhön."
    },
    {
        iconClass: "fas fa-smile-beam", // VAIN Font Awesome -luokat
        number: "\"Oy!\"",
        text: "...with the poodles already! Koska huumorintaju ja positiivinen asenne muuttavat haasteetkin mahdollisuuksiksi."
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
                <h1 className="numbers-section__title">
                    Minä numeroina
                </h1>
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
