import React, { Component, Fragment } from 'react'
// import PropTypes from 'prop-types'
import AppLogger from '../../../commons/logger/AppLogger'
import UserAddForm from '../components/UserAddForm'


class UserAddPage extends Component {
  // propsType (validation)
  static propTypes = {

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


  // render
  render() {
    // log
    AppLogger.info('UserAddPage props : ', this.props)

    // render page
    return (
      <Fragment>
        <UserAddForm />
      </Fragment >
    )
  }
}

export default UserAddPage
