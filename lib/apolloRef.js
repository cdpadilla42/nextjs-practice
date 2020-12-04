import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
} from '@apollo/client';
import fetch from 'isomorphic-unfetch';

export function withApollo(PageComponent) {
  const WithApollo = (props) => {
    return (
      <ApolloProvider client={initApolloClient()}>
        <PageComponent {...props} />
      </ApolloProvider>
    );
  };

  // TODO Dive into nextjs example - get SSR working

  // WithApollo.getServerSideProps = async (ctx) => {
  //   const { AppTree } = ctx;
  //   const apolloClient = (ctx.apolloClient = initApolloClient());

  //   let pageProps = {};
  //   if (PageComponent.getInitialProps) {
  //     pageProps = await PageComponent.getInitialProps(ctx);
  //   }

  //   // if on server
  //   if (typeof window === 'undefined') {
  //     if (ctx.res && ctx.res.finished) {
  //       return pageProps;
  //     }

  //     try {
  //       const { getDataFromTree } = await import('@apollo/react-ssr');
  //       await getDataFromTree(
  //         <AppTree
  //           pageProps={{
  //             ...pageProps,
  //             apolloClient,
  //           }}
  //         />
  //       );
  //     } catch (e) {
  //       console.error(e);
  //     }
  //     Head.rewind();
  //   }

  //   const apolloState = apolloClient.cache.extract();
  //   return {
  //     ...pageProps,
  //     apolloState,
  //   };
  // };

  return WithApollo;
}

export const initApolloClient = (initialState = {}) => {
  const isDev = process.env.NODE_ENV !== 'production';
  const url = isDev ? 'http://localhost:3000' : 'https://usethis.dev';
  const ssrMode = typeof window === 'undefined';
  const link = new createHttpLink({
    uri: `${url}/api/graphql`,
    fetch,
  });

  const cache = new InMemoryCache().restore(initialState);

  const client = new ApolloClient({
    uri: 'http://localhost:3000/api/graphql',
    cache,
    fetch,
    ssrMode,
    link,
  });

  return client;
};
