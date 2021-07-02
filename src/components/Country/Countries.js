import {React} from 'react';
import { useQuery } from "react-apollo";
import gql from "graphql-tag";
import Country from './Country';
import { LIST_COUNTRIES } from '../../graphql/queries/Country';

function CountrySelect ({client, currentCountry, onCountrySelect}) {    
    
    const {data, loading, error} = useQuery(LIST_COUNTRIES, {client});

    if (loading || error) {
        return <p>{error ? error.message : 'Loading...'}</p>;
    }   
    
    return (        
        <select value={currentCountry} onChange={event => onCountrySelect(event)}>
            <option value="">Select Country</option>
            {data.countries.map(country => (
                <option key={country.code} value={country.code}>
                    {country.name}
                </option>
            ))}
        </select>
    );
};

function GetCountry({client, countryCode}) {
    const GET_COUNTRY = gql`
    {
        country(code: "${countryCode}") {
            code,
            name,
            phone,
            currency,
            capital,
            native,
            emoji
        }
    }`;
    const {data, loading, error} = useQuery(GET_COUNTRY, {client});

    // const [getOptions, { data, loading, error }] = useLazyQuery(GET_COUNTRY_BY_ID, {client});    
    // useEffect(() => {                
    //     if (countryCode) {
    //         getOptions({
    //             variables: {
    //                 id: countryCode,
    //             },
    //         });
    //         console.log(data);
    //     }
    // }, [countryCode]);

    if (loading || error) {
        return <p>{error ? error.message : 'Fetching country details...'}</p>;
    }
    
    return <Country country={data.country} />
}
  
export { CountrySelect, GetCountry };