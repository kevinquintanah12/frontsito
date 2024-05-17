import React from 'react';
import { AUTH_TOKEN } from '../constants';
import { useMutation, gql } from '@apollo/client';

const VOTE_MUTATION = gql`
  mutation VoteMutation($countryId: Int!) {
    createVote(countryId: $countryId) {
      user {
        id
        username
      }
      country {
        id
        name
      }
    }
  }
`;

const Country = (props) => {
  const { country } = props;
  const authToken = localStorage.getItem(AUTH_TOKEN);

  const [vote] = useMutation(VOTE_MUTATION, {
    variables: {
      countryId: country.id
    },
    context: {
      headers: {
        authorization: authToken ? `Bearer ${authToken}` : ''
      }
    }
    ,
    onError: (error) => {
  console.error('Mutation error:', error);
}
  });

  return (
    <div className="flex mt2 items-start">
      <div className="flex items-center">
        <span className="gray">{props.index + 1}.</span>
        {authToken && (
          <div
            className="ml1 gray f11"
            style={{ cursor: 'pointer' }}
            onClick={vote}
          >
            like
          </div>
        )}
      </div>
      <div className="ml1">
        <div>
          {country.name} ({country.capital})
        </div>
        <div className="f6 lh-copy gray">
          {country.votes.length} votes | by{' '}
          {country.postedBy ? country.postedBy.username : 'Unknown'}
        </div>
      </div>
    </div>
  );
};

export default Country;
