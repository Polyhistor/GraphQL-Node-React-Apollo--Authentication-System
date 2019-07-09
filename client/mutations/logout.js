import gql from "graphql";

export default gql`
  {
    mutation {
      logout {
        id
        email
      }
    }
  }
`;
