import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import AppLogger from '../../../commons/logger/AppLogger'
import UserAddForm from '../components/UserAddForm'


class UserAddPage extends Component {
  // propsType (validation)
  static propTypes = {
    history: PropTypes.object.isRequired,
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

  // on user add success
  onUserAddSuccess = () => {
    // pop to user list
    this.props.history.goBack()
  }

  // render
  render() {
    // log
    AppLogger.info('UserAddPage props : ', this.props)

    // render page
    return (
      <Fragment>
        <UserAddForm onUserAddSuccess={this.onUserAddSuccess} />
      </Fragment >
    )
  }
}

export default UserAddPage
