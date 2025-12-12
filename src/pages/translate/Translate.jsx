import React, { useMemo, useState } from 'react';
import './translate.css';

const translations = {
  en: {
    title: 'Language Test Page',
    subtitle: 'Switch between English and Dutch',
    intro: 'Welcome to NHL Stenden Explorer!',
    body: 'This is a simple test page to verify language switching in the UI.',
    faq: 'Frequently Asked Questions',
    contact: 'Contact Support',
    switchTo: 'Switch to Dutch',
  },
  nl: {
    title: 'Taal Testpagina',
    subtitle: 'Schakel tussen Engels en Nederlands',
    intro: 'Welkom bij NHL Stenden Explorer!',
    body: 'Dit is een eenvoudige testpagina om het wisselen van taal in de UI te controleren.',
    faq: 'Veelgestelde Vragen',
    contact: 'Contact Ondersteuning',
    switchTo: 'Schakel naar Engels',
  }
};

export default function Translate() {
  const [lang, setLang] = useState('en');
  const translated = useMemo(() => translations[lang], [lang]);

  const toggleLang = () => setLang((current) => (current === 'en' ? 'nl' : 'en'));

  return (
    <section className="translate-page">
      <header>
        <h1>{translated.title}</h1>
        <h3>{translated.subtitle}</h3>
        <button className="lang-toggle" onClick={toggleLang} type="button">
          {translated.switchTo}
        </button>
      </header>

      <article className="translate-content">
        <p className="intro">{translated.intro}</p>
        <p>{translated.body}</p>

        <div className="links">
          <a href="/faq">{translated.faq}</a>
          <a href="/contact">{translated.contact}</a>
        </div>
      </article>
    </section>
  );
}
