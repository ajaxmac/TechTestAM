import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';

const useRepos = () => {
  const { repos, loading } = useAllRepos();

  return {
    repos,
    loading,
  };
};
export default useRepos;

export const GET_REPOS = gql`
  query {
    viewer {
      name
      repositories(first: 10) { 
        nodes {
          name
          id
          description
          isPrivate
        }
      }
    }
  }
`;

function useAllRepos() {
  const { data, loading, error } = useQuery(GET_REPOS);
  if (error) {
    throw new Error(`Failed to fetch repos: ${error.message}`);
  }

  const repos = data ?? null;
  return { repos, loading };
}
