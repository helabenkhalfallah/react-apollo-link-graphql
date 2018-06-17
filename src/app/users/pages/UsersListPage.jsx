import React, { Component } from 'react'
import AppLogger from '../../../commons/logger/AppLogger'
import UsersList from '../components/UsersList'

class UsersListPage extends Component {
  // propsType (validation)
  static propTypes = {

  }

  // default props
  static defaultProps = {

  }

  // component life cycle
  componentDidMount() { }

  // render
  render() {
    // log
    AppLogger.info('Button props : ', this.props)
    return <UsersList />
  }
}

export default UsersListPage
