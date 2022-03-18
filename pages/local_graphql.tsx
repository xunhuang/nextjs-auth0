import { gql, useQuery } from '@apollo/client';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import React from 'react';

import Layout from '../components/layout';
import useAccessToken from './use-accesstoken';

const QUERY = gql`
  query Users {
    allUsers {
      edges {
        node {
          id
          email
          name
        }
      }
    }
  }
`;

// export default withPageAuthRequired(function Profile({ user, session }) {
export default withPageAuthRequired(function Profile(p) {
  const { accessToken } = useAccessToken();
  const { loading, data, error } = useQuery(QUERY, {
    context: { headers: { authorization: `Bearer ${accessToken}` } }
  });

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    console.error(error);
    return null;
  }

  console.log(data);
  const countries = data.allUsers.edges.slice(0, 4);

  return (
    <Layout>
      <h1>Profile</h1>
      <h4>Profile</h4>
      <pre data-testid="profile">{JSON.stringify(p.user, null, 2)}</pre>
      {accessToken && <p>{accessToken}</p>}
      {!accessToken && <p>nothing</p>}

      <div>
        {countries.map((country) => {
          console.log(country);
          return (
            <div key={country.code}>
              <h3>
                <a href="#country-name" aria-hidden="true" id="country-name"></a>
                {country.node.name}
              </h3>
              <p>{country.node.email}</p>
            </div>
          );
        })}
      </div>
    </Layout>
  );
});
