// ./apollo-client.js
import { ApolloClient, ApolloLink, HttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from 'apollo-link-context';

let globalAccessToken = null;

const fetchAccessToken = async () => {
  if (!globalAccessToken) {
    const url = '/api/my/getAccessToken';
    const data = await fetch(url)
      .then((res) => res.json())
      .catch((err) => console.log(`Error: ${err}`));
    globalAccessToken = data?.accessToken;
  }
  return globalAccessToken;
};

const pancakesLink = setContext(async (operation, previousContext) => {
  const { headers } = previousContext;
  const accessToken = await fetchAccessToken();
  return {
    ...previousContext,
    headers: {
      ...headers,
      Authorization: `Bearer ${accessToken}` // custom header
    }
  }
})

const httpLink = new HttpLink({
  uri: '/api/graphql',
})

const client = new ApolloClient({
  link: ApolloLink.from([
    pancakesLink as any, // don't like this.... FIXME
    httpLink,
  ]),
  cache: new InMemoryCache(),

});
export default client;