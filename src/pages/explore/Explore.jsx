import React, { useState } from 'react'
import './explore.css'
import FilterButton from '../../components/filter/FilterButton';
import LocationCard from '../../components/locationcard/locationCard';

export default function Explore() {
    
    const [filterTitle, setFilterTitle] = useState("Facilities");
    const filterOptions = ["All", "Facilitites", "Study Areas", "Services", "Parking"];

    return (
        <section className="explore-our-campus">
            <h1>Explore our Campus</h1>
            <h3>Quick categories</h3>

            {filterOptions.map((title) => (
                <FilterButton title={title} />
            ))}

            {/* <div className="filter-buttons">
                <FilterButton title="All"/>
                <FilterButton title="Facilities"/>
                <FilterButton title="Study Areas"/>
                <FilterButton title="Services"/>
                <FilterButton title="Parking"/>
            </div> */}

            <div className="cards">
                <h2>{filterTitle}</h2>

                <LocationCard image="abc" title="Location" description="lorem ipsum" />
            </div>
        </section>
    )
}