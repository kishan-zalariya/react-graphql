import {React, useState} from 'react';
import './App.css';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from "react-apollo";
import { CountrySelect, GetCountry } from './components/Country/Countries';
import 'bootstrap/dist/css/bootstrap.min.css';

const client = new ApolloClient({
  uri: 'https://countries.trevorblades.com'
});

function App () {
  const [currentCountry, setCurrentCountry] = useState('');
  const onCountrySelect = (event) => {
    setCurrentCountry(event.target.value)
  }

  return(
    <ApolloProvider client={client}>
      <div className="container">
        <nav className="navbar navbar-dark bg-primary">
          <a className="navbar-brand" href="#">React and GraphQL - Sample Application</a>
        </nav>

        <div className="text-center pt-3 pb-2">        
          <CountrySelect onCountrySelect={onCountrySelect} />
        </div>

        { currentCountry ?  
            <GetCountry countryCode={currentCountry} /> 
          : 
            <p className="text-secondary">No any country selected.</p>
        }

      </div>
    </ApolloProvider>
  );
};

export default App;
