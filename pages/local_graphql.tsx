import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import React from 'react';

import Layout from '../components/layout';
import { useAllUsersQuery } from '../src/generated/graphql';

export default withPageAuthRequired(function Profile(p) {
  const { loading, data, error } = useAllUsersQuery();

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
      <div>
        {countries.map((user) => {
          return (
            <div key={user.node.id}>
              <h3>
                <a href="#country-name" aria-hidden="true" id="country-name"></a>
                {user.node.name}
              </h3>
              <p>{user.node.email}</p>
            </div>
          );
        })}
      </div>
    </Layout>
  );
});
