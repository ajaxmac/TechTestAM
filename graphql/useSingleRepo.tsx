import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';

const useSingleRepo = (owner: string, name: string) => {
  const { repo, loading } = useRepo(owner, name);

  return {
    repo,
    loading,
  };
};
export default useSingleRepo;

const GET_REPO = gql`
  query($owner: String!, $name: String!) {
    repository(owner: $owner, name: $name) {
      id
      name
      description
      isPrivate
    }
  }
`;

function useRepo(owner: string, name: string) {
  const { data, loading, error } = useQuery(GET_REPO, { variables: { owner, name } });
  if (error) {
    throw new Error(`Failed to fetch repos: ${error.message}`);
  }

  const repo = data ?? null;
  return { repo, loading };
}
