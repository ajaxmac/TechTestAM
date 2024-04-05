import React from 'react';
import { getApolloClient } from './getApolloClient';
import { ApolloProvider } from '@apollo/client';

// Initialize Apollo Client
const client = getApolloClient();

type Props = {
  children: React.ReactNode;
};

const Provider = (props: Props) => {
  const {children} = props;

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default Provider;
