import gql from 'graphql-tag'


const UsersListQueries = gql`
    {
      users{
        id,
        firstName,
        lastName,
        birthday,
        job
      }
    }
`
export default UsersListQueries
