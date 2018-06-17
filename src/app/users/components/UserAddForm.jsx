import React from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import PropTypes from 'prop-types'

// import AppCoreModule from '../../../core/index'
import AppLogger from '../../../commons/logger/AppLogger'
import withUserAddStyle from '../styles/withUserAddStyle'


// button
// const { Button } = AppCoreModule

const UserSchema = Yup.object().shape({
  first_name: Yup.string()
    .min(2, 'Must be longer than 2 characters')
    .max(20, 'Nice try, nobody has a first name that long')
    .required('Required'),
  last_name: Yup.string()
    .min(2, 'Must be longer than 2 characters')
    .max(20, 'Nice try, nobody has a last name that long')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Required Email'),
  password: Yup.string()
    .required('Required Password'),
  password_confirmation: Yup.string()
    .oneOf([Yup.ref('password')], 'Password and confirmation must been the same')
    .required('Required Password Confirmation'),
})

const UserAddForm = ({ className }) => (
  <div className={className}>
    <h1>Add user</h1>
    <Formik
      initialValues={{
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        password_confirmation: '',
      }}
      validationSchema={UserSchema}
      onSubmit={(values, actions) => {
        // log submit status
        AppLogger.info('UserAddForm onSubmit values : ', values)
        AppLogger.info('UserAddForm onSubmit actions : ', actions)
        actions.setSubmitting(true)
        actions.setErrors(null)
      }}
      render={({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) =>
        (
          <form
            className="user-add-form"
            onSubmit={handleSubmit}
          >
            <input
              className="user-input-field"
              type="Text"
              name="first_name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.first_name}
            />
            {touched.first_name && errors && errors.first_name &&
              <div className="user-submit-error-block">{errors.first_name}</div>
            }
            <input
              className="user-input-field"
              type="Text"
              name="last_name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.last_name}
            />
            {touched.last_name && errors && errors.last_name &&
              <div className="user-submit-error-block">{errors.last_name}</div>
            }
            <input
              className="user-input-field"
              type="Email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            {touched.email && errors && errors.email &&
              <div className="user-submit-error-block">{errors.email}</div>
            }
            <input
              className="user-input-field"
              type="Password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            {touched.password && errors && errors.password &&
              <div className="user-submit-error-block">{errors.password}</div>
            }
            <input
              className="user-input-field"
              type="Password"
              name="password_confirmation"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password_confirmation}
            />
            {touched.password_confirmation && errors && errors.password_confirmation &&
              <div className="user-submit-error-block">{errors.password_confirmation}</div>
            }
            <div className="user-submit-block">
              <button
                className="user-submit-button"
                type="submit"
                disabled={isSubmitting}
              >
                Submit
              </button>
            </div>
          </form>
        )}
    />
  </div >
)

// prop type validation
UserAddForm.propTypes = {
  className: PropTypes.string,
}

// default prop
UserAddForm.defaultProps = {
  className: null,
}

export default withUserAddStyle(UserAddForm)

