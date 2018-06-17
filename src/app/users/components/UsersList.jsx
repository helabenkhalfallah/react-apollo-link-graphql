import React, { Fragment } from 'react'
import ReactTable from 'react-table'
import { Query } from 'react-apollo'
import PropTypes from 'prop-types'
import AppLogger from '../../../commons/logger/AppLogger'
import AppCoreModule from '../../../core/index'
import UsersListQueries from '../graphql/UsersListQueries'
import withUsersListStyle from '../styles/withUsersListStyle'

// table columns name
const usersTableHeaders = [{
  id: 'id',
  Header: 'User Id',
  accessor: 'id',
},
{
  Header: 'First Name',
  accessor: 'firstName',
},
{
  Header: 'Last Name',
  accessor: 'lastName',
},
{
  Header: 'Birthday',
  accessor: 'birthday',
},
{
  Header: 'Job',
  accessor: 'job',
}]


// display list
const UsersList = ({ className }) => (
  // query user
  <Query
    query={UsersListQueries}
    pollInterval={200}
  >
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
          <div className={className}>
            <ReactTable
              className="user-list-table-block"
              defaultPageSize={5}
              sortable
              multiSort
              resizable
              filterable={false}
              data={users}
              columns={usersTableHeaders}
            />
          </div>
        </Fragment>
      )
    }}
  </Query>
)

// prop type validation
UsersList.propTypes = {
  className: PropTypes.string,
}

// default prop
UsersList.defaultProps = {
  className: null,
}

export default withUsersListStyle(UsersList)

