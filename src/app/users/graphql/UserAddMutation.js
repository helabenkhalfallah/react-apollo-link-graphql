import gql from 'graphql-tag'

// We use the gql tag to parse our query
// string into a query document
const UserAddMutation = gql`
  mutation UserAdd($firstName: String!, $lastName: String!, $birthday: String, $job: String){
    UserAdd(firstName: $firstName, lastName: $lastName, birthday: $birthday, job: $job) {
      id,
      firstName,
      lastName,
      birthday,
      job
    }
  }
`

export default UserAddMutation
