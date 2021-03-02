import React from 'react';

const Country = (props) => {
    const {name, population, region, flag} = props.country;
    const flagStyle = {height: '100px', border: '1px solid lightgrey'}
    const countryStyle = {margin: '10px', padding: '10px', border: '1px solid red'}
    const handleAddCountry = props.handleAddCountry;
    return (
        <div style={countryStyle}>
            <h4>This is a country: {name}</h4>
            <img style={flagStyle} src={flag} alt=""/>
            <p>Population: {population}</p>
            <p><small> Region: {region} </small> </p>
            <button onClick={ () => handleAddCountry(props.country)}>Add Country</button>
        </div>
    );
};

export default Country;