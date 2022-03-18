import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import React from 'react';

import Layout from '../components/layout';
import useAccessToken from '../components/use-accesstoken';

// export default withPageAuthRequired(function Profile({ user, session }) {
export default withPageAuthRequired(function Profile(p) {
  const { accessToken } = useAccessToken();

  // const session = useSession();
  // console.log(session);
  console.log(accessToken);
  return (
    <Layout>
      <h1>Profile</h1>
      <h4>Profile</h4>
      <pre data-testid="profile">{JSON.stringify(p.user, null, 2)}</pre>
      {accessToken && <p>{accessToken}</p>}
      {!accessToken && <p>nothing</p>}
    </Layout>
  );
});
