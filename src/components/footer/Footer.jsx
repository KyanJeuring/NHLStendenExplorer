import React, {useMemo} from 'react';
import './footer.css';

const translations = {
    en: {
        contactDetails: "Contact details",
        openingHours: "Opening hours",
        phone: "Tel: <a href='tel:+31582441155'>+31 58 244 1155</a>",
        email: "Email: <a href='mailto:studentinfo@nhlstenden.com'>studentinfo@nhlstenden.com</a>",
        hours: "Mon-Thu 8:00-18:00, Fri 8:00-17:00",
    },
    nl: {
        contactDetails: "Contactgegevens",
        openingHours: "Openingstijden",
        phone: "Tel: <a href='tel:+31582441155'>+31 58 244 1155</a>",
        email: "E-mail: <a href='mailto:studentinfo@nhlstenden.com'>studentinfo@nhlstenden.com</a>",
        hours: "Ma-Do 8:00-18:00, Vr 8:00-17:00",
    }
};

export default function Footer({ lang, toggleLang }) {
    const translate = useMemo(() => translations[lang] || translations.en, [lang]);
    return (
        <footer>
            <div className="footerContainer">
                <div className="footerElement">
                    {translate.contactDetails} <br/> <br/>
                    <div dangerouslySetInnerHTML={{ __html: translate.phone }} /> <br/>
                    <div dangerouslySetInnerHTML={{ __html: translate.email }} />
                </div>
            
                <div className="footerElement">
                    {translate.openingHours} <br/> <br/>
                    {translate.hours}
                </div>
            </div>
        </footer>
    )
}
