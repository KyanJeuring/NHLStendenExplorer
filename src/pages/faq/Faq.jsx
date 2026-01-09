import React, { useMemo, useEffect, useState } from 'react'
import './faq.css'
import FaqCard from '../../components/faq/FaqCard'

const translations = {
    en: {
        title: "Frequently Asked Questions",
        subtitle: "Search by topic"
    },
    nl: {
        title: "Veelgestelde Vragen",
        subtitle: "Zoek op onderwerp"
    }
}

export default function Faq({ lang, toggleLang }) {
    const translated = useMemo(() => translations[lang] || translations.en, [lang]);
    const [faqData, setFaqData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000'

    useEffect(() => {
        let mounted = true
        const apiLang = lang === 'en' ? 'en' : 'nl'

        setLoading(true)
        setError(null)

        fetch(`${API_URL}/api/faq/${apiLang}`)
            .then((res) => {
                if (!res.ok) throw new Error('Network response was not ok')
                return res.json()
            })
            .then((data) => {
                if (mounted) setFaqData(data)
            })
            .catch((err) => {
                console.error('Failed to fetch FAQs', err)
                if (mounted) setError(err.message)
            })
            .finally(() => mounted && setLoading(false))

        return () => {
            mounted = false
        }
    }, [API_URL, lang])

    return (
        <>
            <section className="page-title">
                <h1>{translated.title}</h1>
                <h2>{translated.subtitle}</h2>
            </section>
            <section className="faq-cards">
                {loading && <p>Loading...</p>}
                {error && <p className="error">Error: {error}</p>}
                {!loading && !error && faqData.length === 0 && <p>No FAQs found.</p>}
                {!loading && !error && faqData.map((item) => (
                    <FaqCard key={item.id} question={item.question} answer={item.answer} />
                ))}
            </section>
        </>
    )
}
