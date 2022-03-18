import { gql, useQuery } from '@apollo/client';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import React from 'react';

import Layout from '../components/layout';
import useAccessToken from '../components/use-accesstoken';

const QUERY = gql`
  query Countries {
    countries {
      code
      name
      emoji
    }
  }
`;

// export default withPageAuthRequired(function Profile({ user, session }) {
export default withPageAuthRequired(function Profile(p) {
  const { accessToken } = useAccessToken();
  const { data, loading, error } = useQuery(QUERY);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    console.error(error);
    return null;
  }
  const countries = data.countries.slice(0, 4);

  return (
    <Layout>
      <h1>Profile</h1>
      <h4>Profile</h4>
      <pre data-testid="profile">{JSON.stringify(p.user, null, 2)}</pre>
      {accessToken && <p>{accessToken}</p>}
      {!accessToken && <p>nothing</p>}

      <div>
        {countries.map((country) => (
          <div key={country.code}>
            <h3>
              <a href="#country-name" aria-hidden="true" id="country-name"></a>
              {country.name}
            </h3>
            <p>
              {country.code} - {country.emoji}
            </p>
          </div>
        ))}
      </div>
    </Layout>
  );
});
