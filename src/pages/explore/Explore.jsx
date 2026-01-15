import React, { useEffect, useState, useMemo } from 'react'
import './explore.css';
import FilterButton from '../../components/filter/FilterButton';
import LocationCard from '../../components/locationcard/LocationCard';

const translations = {
    en: {
        title: "Explore our Campus",
        quickCategories: "Quick categories",
        loading: "Loading...",
        error: "Error:",
        noItems: "No Explorer Items found.",
    },
    nl: {
        title: "Ontdek onze Campus",
        quickCategories: "Snelle categorieën",
        loading: "Laden...",
        error: "Fout:",
        noItems: "Geen Explorer-items gevonden.",
    },
};

// Using server-side translations via API
const allLabels = { en: 'All', nl: 'Alles' };

export default function Explore({ lang, toggleLang }) {
    const [explorerData, setExplorerData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const translation = useMemo(() => translations[lang] || translations.en, [lang])

    const API_URL = useMemo(() => import.meta.env.VITE_API_URL || 'http://localhost:4000', [])

    useEffect(() => {
        let mounted = true
        setLoading(true)
        fetch(`${API_URL}/api/explorer?lang=${lang}`)
            .then((res) => {
                if (!res.ok) throw new Error('Network response was not ok')
                return res.json()
            })
            .then((data) => {
                if (mounted) {
                    const ids = data.map(item => item.id);
                    const uniqueIds = new Set(ids);
                    if (ids.length !== uniqueIds.size) {
                        console.warn('DUPLICATES FOUND IN API RESPONSE!');
                    }
                    setExplorerData(data)
                }
            })
            .catch((err) => {
                console.error('Failed to fetch EXPLORERs', err)
                if (mounted) setError(err.message)
            })
            .finally(() => mounted && setLoading(false))

        return () => {
            mounted = false
        }
    }, [API_URL, lang])

    const [filterTitle, setFilterTitle] = useState('All');
    const [categories, setCategories] = useState([])

    const prettyTitle = (value) => value
        .toLowerCase()
        .split('_')
        .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
        .join(' ')

    useEffect(() => {
        fetch(`${API_URL}/api/explorer/categories?lang=${lang}`)
            .then((res) => {
                if (!res.ok) throw new Error('Failed to fetch categories')
                return res.json()
            })
            .then((cats) => {
                // Normalize to array of objects with key and label
                const normalized = Array.isArray(cats) ? cats.map((category) => (typeof category === 'string' ? { key: category, label: null } : category)) : []
                setCategories(normalized)
            })
            .catch((err) => console.error('Failed to fetch categories', err))
    }, [API_URL, lang])

    const parseCategories = (raw) => {
        if (!raw) return []
        if (Array.isArray(raw)) return raw
        return String(raw).replace(/[{}]/g, '').split(',').filter(Boolean)
    }

    const [selected, setSelected] = useState('ALL')
    const visibleItems = explorerData.filter((item) => {
        if (selected === 'ALL') return true
        const cats = parseCategories(item.categories)
        return cats.includes(selected)
    })

    // Keep filter title in sync with language and selected category
    useEffect(() => {
        const allLabel = (categories.find(category => category.key === 'ALL')?.label) || allLabels[lang] || 'All'
        const selectedLabel = categories.find(category => category.key === selected)?.label
        setFilterTitle(selected === 'ALL' ? allLabel : (selectedLabel || prettyTitle(selected)))
    }, [lang, categories, selected])

    // Render filters, derive categories from explorerData if API returns empty
    const derivedCategories = useMemo(() => {
        const set = new Set()
        explorerData.forEach((item) => {
            parseCategories(item.categories).forEach((category) => set.add(category))
        })
        return Array.from(set).map((key) => ({ key, label: null }))
    }, [explorerData])
    const categoriesToRender = categories.length ? categories : derivedCategories

    return (
        <section className="explore-our-campus">
            <h1>{translation.title}</h1>
            <h3>{translation.quickCategories}</h3>
            <div className="filter-buttons">
                <FilterButton key="ALL" title={(categoriesToRender.find(category => category.key === 'ALL')?.label) || allLabels[lang] || 'All'} isActive={selected === 'ALL'} onClick={() => {setSelected('ALL')}}/>
                {categoriesToRender.filter(category => category.key !== 'ALL').map(({ key, label }) => (
                    <FilterButton key={key} title={label || prettyTitle(key)} isActive={selected === key} onClick={() => {setSelected(key)}}/>
                ))}
            </div>
            <div className="card-section">
                <h2>{filterTitle}</h2>
                {loading && <p>{translation.loading}</p>}
                {error && <p className="error">{translation.error} {error}</p>}
                {!loading && !error && visibleItems.length === 0 && <p>{translation.noItems}</p>}
                <div className="cards">
                    {!loading && !error && visibleItems.map((item) => (
                        <LocationCard key={item.id} image={item.image_url} title={item.title} description={item.description} link={item.link_url} lang={lang}/>
                    ))}
                </div>
            </div>
        </section>
    )
}