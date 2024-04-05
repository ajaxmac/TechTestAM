import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Config from 'react-native-config';

export const getApolloClient = () => {
  const httpLink = createHttpLink({
    uri: 'https://api.github.com/graphql',
  });

  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: `Bearer ${Config.REACT_APP_GITHUB_ACCESS_TOKEN}`,
      },
    };
  });

  return new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });
};
