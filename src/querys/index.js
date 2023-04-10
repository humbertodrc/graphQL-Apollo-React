import { gql } from '@apollo/client';

const GET_CHARCTERS = gql`
  query{
    characters{
      results{
        id
        name
        status
        image
      }
    }
  }
`

export default GET_CHARCTERS;