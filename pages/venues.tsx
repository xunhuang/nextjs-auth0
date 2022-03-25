import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import React from 'react';

import Layout from '../components/layout';
import { useBayAreaVenuesQuery } from '../src/generated/graphql';

export default withPageAuthRequired(function Profile() {
  const { loading, data, error } = useBayAreaVenuesQuery();

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    console.error(error);
    return null;
  }

  console.log(data);
  const countries = data.allVenues.nodes;
  const totalCount = data.allVenues.totalCount;

  return (
    <Layout>
      <h1>Venues</h1>
      <h4>Venues</h4>
      <div>
        <div>Total {totalCount}</div>
        {countries.map((user) => {
          return (
            <div key={user.key}>
              <h3>
                <a href="#country-name" aria-hidden="true" id="country-name"></a>
                {user.name}
              </h3>
              <p>{user.stars}</p>
            </div>
          );
        })}
      </div>
    </Layout>
  );
});
