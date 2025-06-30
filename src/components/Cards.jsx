import img from '../assets/tv-logo.png';
import React, { useState, useEffect } from 'react';
import data from '../data.json'; 

const Cards = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        if (searchTerm.trim() !== '') {
            const results = data.filter(item => 
                item.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredData(results);
        } else {
            setFilteredData([]);
        }
    }, [searchTerm]);

   return (
    <>
       <div className='shows-container'>
            <div className='card'>
                <img src={img} alt='TV search logo' />
                    <div className='form-group'>
                    <input type="text" id="search" placeholder='Enter Television Show...' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                    {filteredData.length > 0 && (
                        <div className='show-list'>
                            {filteredData.map(item => (
                                <div key={item.id}>
                                    <img src={item.img} /> 
                                    <h1>{item.name}</h1>
                                    <h2>{item.type}</h2>
                                    <h4>{item.duration}</h4>
                                    <p>Started: {item.start}</p>
                                    <p>Ended: {item.end}</p>
                                    <a href={item.link} target='_blank'>Watch TV Intro</a>
                                </div>
                            ))}
                        </div>
                    )}
                    {searchTerm.trim() !== '' && filteredData.length === 0 && (
                        <p className='no-results'>No results found.</p>
                    )}
                </div>
            </div>
        </div> 

        <div className='designer'>
            <p>Created and designed by <a href="https://geraldandrewsmedia.netlify.app/" target="_blank">Gerald Andrews</a></p>
        </div>
    </>
  );
};

export default Cards;
