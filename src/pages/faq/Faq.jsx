import React, { useEffect, useState } from 'react'
import './faq.css'
import FaqCard from '../../components/faq/FaqCard'

export default function Faq() {
    const [faqData, setFaqData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000'

    useEffect(() => {
        let mounted = true
        setLoading(true)
        fetch(`${API_URL}/api/faq`)
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
    }, [API_URL])

    return (
        <>
            <section className="page-title">
                <h1>Frequently Asked Questions</h1>
                <h2>Search by topic</h2>
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
