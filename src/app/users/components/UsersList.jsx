import React, { Fragment } from 'react'
import { Query } from 'react-apollo'
import AppLogger from '../../../commons/logger/AppLogger'
import AppCoreModule from '../../../core/index'
import UsersListQueries from '../graphql/UsersListQueries'


// display list
const UsersList = () => (
  // query user
  <Query query={UsersListQueries}>
    {({ loading, error, data }) => {
      // log query status
      AppLogger.info('UserList UsersListQueries : ', UsersListQueries)
      AppLogger.info('UserList error : ', error)
      AppLogger.info('UserList loading : ', loading)
      AppLogger.info('UserList data : ', data)

      // user list loading status
      if (loading) {
        return <AppCoreModule.LoadingPage />
      }

      // user list error status
      if (error) {
        return <AppCoreModule.ErrorPage {...error} />
      }

      // user list emtpy status
      if (!data || !data.users) {
        return <AppCoreModule.EmptyPage />
      }

      // render only if data
      const { users } = data
      AppLogger.info('UserList users : ', users)
      return (
        <Fragment>
          <ul >
            {users.map(item => (
              <li key={item.id}>
                {item.firstName} {item.lastName} {item.birthday}
              </li >
            ))
            }
          </ul >
        </Fragment>
      )
    }}
  </Query>
)

export default UsersList

