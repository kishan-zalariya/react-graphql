import React from 'react';

const Country = ({country}) => (    
    <div className="card" style={{'width': '100%', 'marginTop': '10px'}}>
        <div className="card-body" key={country.code}>
            <h5 className="card-title">{country.name} ({country.code})</h5>
            <h6 className="card-subtitle mb-2 text-muted">Currency: {country.currency}</h6>
            <p>
                <div> Native: {country.native} </div>
                <div> Capital: {country.capital} </div>                
                <div> Phone: +{country.phone} </div>
            </p>
        </div>
    </div>    
);

export default Country;