import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';
import { useNavigate } from 'react-router-dom';

const CREATE_COUNTRY_MUTATION = gql`
 mutation PostMutation(
   $name: String!
    $capital: String!
    $population: Int!
    $language: String!
  ) {
    createCountry(name: $name, capital: $capital, population: $population, language: $language) {
      id
      name
      capital
      population
      language
    }
  }
`;

const CreateCountry = () => {
  const navigate = useNavigate();

  const [formState, setFormState] = useState({
    name: '',
    capital: '',
    population: 0,
    language: ''
  });

  const [createCountry] = useMutation(CREATE_COUNTRY_MUTATION, {
    variables: {
      name: formState.name,
      capital: formState.capital,
      population: formState.population,
      language: formState.language
    },
    onCompleted: () => navigate('/')
  });

  

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          createCountry();
        }}
      >
        <div className="flex flex-column mt3">
          <input
            className="mb2"
            value={formState.name}
            onChange={(e) =>
              setFormState({
                ...formState,
                name: e.target.value
              })
            }
            type="text"
            placeholder="Country Name"
          />
          <input
            className="mb2"
            value={formState.capital}
            onChange={(e) =>
              setFormState({
                ...formState,
                capital: e.target.value
              })
            }
            type="text"
            placeholder="Capital"
          />
          <input
            className="mb2"
            value={formState.population}
            onChange={(e) =>
              setFormState({
                ...formState,
                population: parseInt(e.target.value)
              })
            }
            type="number"
            placeholder="Population"
          />
          <input
            className="mb2"
            value={formState.language}
            onChange={(e) =>
              setFormState({
                ...formState,
                language: e.target.value
              })
            }
            type="text"
            placeholder="Language"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateCountry;