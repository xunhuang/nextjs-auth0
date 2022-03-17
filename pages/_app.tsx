import { ApolloProvider } from '@apollo/client';
import { UserProvider } from '@auth0/nextjs-auth0';
import React from 'react';

import client from '../apollo-client';

import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps): React.ReactElement<AppProps> {
  const { user } = pageProps;

  return (
    <ApolloProvider client={client}>
      <UserProvider user={user}>
        <Component {...pageProps} />
      </UserProvider>
    </ApolloProvider>
  );
}
