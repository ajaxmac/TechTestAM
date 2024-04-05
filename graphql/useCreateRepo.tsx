// Write a mutation to create a new repository
import { gql } from '@apollo/client';
import { useMutation } from '@apollo/client';

const CREATE_REPO = gql`
  mutation CreateRepository($name: String!, $description: String!) {
    createRepository(input: { name: $name, description: $description, visibility: PRIVATE }) {
      repository {
        id
        name
      }
    }
  }
`;

const useCreateRepo = () => {
  const [createRepo] = useMutation(CREATE_REPO);

  const create = async (name: string, description: string) => {
    return await createRepo({ variables: { name, description } });
  };

  return { create };
};

export default useCreateRepo;
