import React, { Component } from 'react'
import PropTypes from 'prop-types'
import AppLogger from '../../../commons/logger/AppLogger'
import DefaultButton from './DefaultButton'
import PrimaryButton from './PrimaryButton'
import SecondaryButton from './SecondaryButton'

class Button extends Component {
  // propsType (validation)
  static propTypes = {
    primary: PropTypes.bool,
    secondary: PropTypes.bool,
  }

  // default props
  static defaultProps = {
    primary: false,
    secondary: false,
  }

  // component life cycle
  componentDidMount() { }

  // render the appropriate button
  // case type :
  // primary, secondary or default
  render() {
    // log
    AppLogger.info('Button props : ', this.props)
    AppLogger.info('Button DefaultButton : ', DefaultButton)
    const { primary, secondary } = this.props

    // return primary button
    if (primary) {
      return <PrimaryButton {...this.props} />
    }

    // return secondary button
    if (secondary) {
      return <SecondaryButton {...this.props} />
    }

    // return button case type
    // primary, secondary or default
    return <DefaultButton {...this.props} />
  }
}

export default Button

