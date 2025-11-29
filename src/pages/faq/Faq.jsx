import React from 'react'
import './faq.css'
import FaqCard from '../..//components/faq/FaqCard'

export default function Faq() {
    const faqData = [
        {question: "What is NHL Stenden?", answer: "NHL Stenden is a university of applied sciences in the Netherlands."},
        {question: "How can I apply?", answer: "You can apply through our online application portal."},
        {question: "What courses are offered?", answer: "We offer a variety of courses in different fields of study."},
        {question: "Where is the campus located?", answer: "Our main campus is located in Leeuwarden."},
        {question: "What are the tuition fees?", answer: "Tuition fees vary depending on the program."},
        {question: "Are there scholarships available?", answer: "Yes, we offer several scholarships for eligible students."},
    ]

    return (
        <>
            <section className="page-title">
                <h1>Frequently Asked Questions</h1>
                <h2>Search by topic</h2>
            </section>
            <section className="faq-cards">
                {faqData.map((item) => (
                    <FaqCard question={item.question} answer={item.answer} />
                ))}
            </section>
        </>
    )
}
