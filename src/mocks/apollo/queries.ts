import gql from 'graphql-tag';

const GET_QUERY = gql`
  query GetCollaboratorInfoByName($name: String!) {
    collaborators(where: { name: $name }, stage: DRAFT) {
      githubUrl
      description
      linkedinUrl
      name
    }
  }
`;

export const mocks = [
  {
    request: {
      query: GET_QUERY,
      variables: {
        name: 'Natã',
      },
    },
    result: () => {
      // do something, such as recording that this function has been called
      // ...
      return {
        data: {
          dog: {
            id: '1',
            name: 'Natã',
            githubUrl: 'https://github.com/natanhermes',
            linkedinUrl: 'https://linkedin/in/natanhermes',
            description:
              'Esse magna officia irure nisi deserunt et velit. Culpa quis minim in veniam culpa laborum veniam incididunt commodo pariatur consequat culpa irure. Veniam qui minim non laboris consectetur mollit labore cupidatat. Ad do cupidatat anim Lorem ex magna aliqua elit dolor enim. Ut eiusmod ea cillum nostrud officia ad consequat proident commodo duis commodo ullamco anim elit.',
          },
        },
      };
    },
  },
];
