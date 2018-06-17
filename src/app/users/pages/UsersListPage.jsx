import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import AppLogger from '../../../commons/logger/AppLogger'


class UsersListPage extends Component {
  // propsType (validation)
  static propTypes = {

  }

  // default props
  static defaultProps = {

  }

  // component life cycle
  componentDidMount() { }

  // render the appropriate button
  // case type :
  // primary, secondary or default
  render() {
    // log
    AppLogger.info('Button props : ', this.props)
    return <h1>Hello, list hela!</h1>
  }
}

export default UsersListPage
