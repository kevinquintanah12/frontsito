
import React from 'react';
import Country from './Country';

import { useQuery, gql } from '@apollo/client';

const FEED_QUERY = gql`
  query {
    countries {
       id
       name
       capital
       population
       language
    
        postedBy {
          username
        }
        votes {
          id
        }
    }
  }
`;

const CountryList = () => {

  const { data } = useQuery(FEED_QUERY);

  return (
    <div>

    { data && (
        <>
          {data.countries.map((country, index) => (
            <Country key={country.id} country={country} index={index}/>
          ))}
        </>
      )}
    </div>
  );
};

export default CountryList;
