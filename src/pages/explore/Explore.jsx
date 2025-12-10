import React, { useEffect, useState } from 'react'
import './explore.css';
import FilterButton from '../../components/filter/FilterButton';
import LocationCard from '../../components/locationcard/LocationCard';

export default function Explore() {
    const [explorerData, setExplorerData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000'

    useEffect(() => {
        let mounted = true
        setLoading(true)
        fetch(`${API_URL}/api/explorer`)
            .then((res) => {
                if (!res.ok) throw new Error('Network response was not ok')
                return res.json()
            })
            .then((data) => {
                if (mounted) setExplorerData(data)
            })
            .catch((err) => {
                console.error('Failed to fetch EXPLORERs', err)
                if (mounted) setError(err.message)
            })
            .finally(() => mounted && setLoading(false))

        return () => {
            mounted = false
        }
    }, [API_URL])

    const [filterTitle, setFilterTitle] = useState("All");
    const [categories, setCategories] = useState([])

    const prettyTitle = (value) => value
        .toLowerCase()
        .split('_')
        .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
        .join(' ')

    useEffect(() => {
        fetch(`${API_URL}/api/explorer/categories`)
            .then((res) => {
                if (!res.ok) throw new Error('Failed to fetch categories')
                return res.json()
            })
            .then((cats) => setCategories(Array.isArray(cats) ? cats : []))
            .catch((err) => console.error('Failed to fetch categories', err))
    }, [API_URL])

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

    return (
        <section className="explore-our-campus">
            <h1>Explore our Campus</h1>
            <h3>Quick categories</h3>
            <div className="filter-buttons">
                <FilterButton key="ALL" title="All" isActive={selected === 'ALL'} onClick={() => {setSelected('ALL'); setFilterTitle('All')}}/>
                {categories.map((value) => (
                    <FilterButton key={value} title={prettyTitle(value)} isActive={selected === value} onClick={() => {setSelected(value); setFilterTitle(prettyTitle(value))}}/>
                ))}
            </div>
            <div className="card-section">
                <h2>{filterTitle}</h2>
                {loading && <p>Loading...</p>}
                {error && <p className="error">Error: {error}</p>}
                {!loading && !error && visibleItems.length === 0 && <p>No Explorer Items found.</p>}
                <div className="cards">
                    {!loading && !error && visibleItems.map((item) => (
                        <LocationCard key={item.id} image={item.image_url} title={item.title} description={item.description} />
                    ))}
                </div>
            </div>
        </section>
    )
}