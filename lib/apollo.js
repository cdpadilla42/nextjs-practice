import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import fetch from 'isomorphic-unfetch';

export function withApollo(PageComponent) {
  const WithApollo = (props) => {
    return (
      <ApolloProvider client={initApolloClient()}>
        <PageComponent {...props} />
      </ApolloProvider>
    );
  };

  return WithApollo;
}

const initApolloClient = () => {
  const client = new ApolloClient({
    uri: 'http://localhost:3000/api/graphql',
    cache: new InMemoryCache(),
    fetch,
    ssrMode: true,
  });

  return client;
};
