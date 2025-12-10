import React from 'react';
import './filterbutton.css';

export default function FilterButton({ title, onClick, isActive }) {
    const className = `filter-button${isActive ? ' active' : ''}`
    return (
        <button className={className} onClick={onClick} type="button">
            {title}
        </button>
    )
}