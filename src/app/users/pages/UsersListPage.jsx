import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import AppLogger from '../../../commons/logger/AppLogger'
import UsersList from '../components/UsersList'
import AppCoreModule from '../../../core/index'

class UsersListPage extends Component {
  // propsType (validation)
  static propTypes = {
    history: PropTypes.object.isRequired,
    data: PropTypes.object.isRequired,
  }

  // default props
  static defaultProps = {

  }

  // initial state
  state = {

  }

  // did mount staff
  componentDidMount() {
  }

  // on add click
  onUserAddClick = (event) => {
    if (event) {
      AppLogger.info('UserListPage add user event : ', event)
      // add user
      this.props.history.push({
        pathname: '/user-add',
        search: null,
        state: null,
      })
    }
  }

  // render
  render() {
    // log
    AppLogger.info('UsersListPage props : ', this.props)

    // render page
    const { Button } = AppCoreModule
    return (
      <Fragment>
        <Button
          onClick={this.onUserAddClick}
          hcolor="white"
          hbackground="#11dded"
          halign="right"
          hfamily="system-ui"
          hsize="1.5rem"
          hstyle="normal"
          hweight="lighter"
          hborder="black 10px"
          hradius="5px"
          hmargin="15px 5px 5px 15px"
          hpadding="10px"
        >
          Click Me To Add User
        </Button>
        <UsersList />
      </Fragment >
    )
  }
}

export default UsersListPage
