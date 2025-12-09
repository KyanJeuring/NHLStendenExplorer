import React, { useState } from 'react';
import './filterbutton.css';

export default function Filter({ title, onClick }) {
    
    return (
        <button className="filter-button" onClick={onClick}>{title}</button>
    )
}