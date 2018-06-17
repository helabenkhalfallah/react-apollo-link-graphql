import React from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import PropTypes from 'prop-types'
import { Mutation } from 'react-apollo'

import AppCoreModule from '../../../core/index'
import withUserAddStyle from '../styles/withUserAddStyle'
import UserAddMutation from '../graphql/UserAddMutation'


// button
const { Button } = AppCoreModule


const UserSchema = Yup.object().shape({
  first_name: Yup.string()
    .min(2, 'Must be longer than 2 characters')
    .max(20, 'Nice try, nobody has a first name that long')
    .required('Required'),
  last_name: Yup.string()
    .min(2, 'Must be longer than 2 characters')
    .max(20, 'Nice try, nobody has a last name that long')
    .required('Required'),
  birthday: Yup.date()
    .required('You should add a correct birthday date'),
  job: Yup.string()
    .required('Job is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Required Email'),
  password: Yup.string()
    .required('Required Password'),
  password_confirmation: Yup.string()
    .oneOf([Yup.ref('password')], 'Password and confirmation must been the same')
    .required('Required Password Confirmation'),
})

const userAddWithSuccess = (onUserAddSuccess) => {
  onUserAddSuccess()
}

const UserAddForm = ({ className, onUserAddSuccess }) => (
  <Mutation mutation={UserAddMutation}>
    {(addUser, { loading, error, data }) => (
      <div className={className}>
        <h1>Add user</h1>
        {loading && <AppCoreModule.LoadingPage />}
        {error && <AppCoreModule.ErrorPage {...error} />}
        {data && data.UserAdd && userAddWithSuccess(onUserAddSuccess)}
        <Formik
          initialValues={{
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            password_confirmation: '',
            birthday: '',
            job: '',
          }}
          validationSchema={UserSchema}
          onSubmit={(values) => {
            // log submit status
            addUser({
              variables:
              {
                firstName: values.first_name,
                lastName: values.last_name,
                birthday: values.birthday,
                job: values.job,
              },
            })
          }}
          render={({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
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
                <input
                  className="user-input-field"
                  type="Date"
                  name="birthday"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.birthday}
                />
                {touched.birthday && errors && errors.birthday &&
                  <div className="user-submit-error-block">{errors.birthday}</div>
                }
                <input
                  className="user-input-field"
                  type="Text"
                  name="job"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.job}
                />
                {touched.job && errors && errors.job &&
                  <div className="user-submit-error-block">{errors.job}</div>
                }
                <div className="user-submit-block">
                  <Button
                    className="user-submit-button"
                    type="submit"
                    primary
                  >
                    Submit
                  </Button>
                </div>
              </form>
            )}
        />
      </div >
    )}
  </Mutation>
)

// prop type validation
UserAddForm.propTypes = {
  className: PropTypes.string,
  onUserAddSuccess: PropTypes.func,
}

// default prop
UserAddForm.defaultProps = {
  className: null,
  onUserAddSuccess: null,
}

export default withUserAddStyle(UserAddForm)

