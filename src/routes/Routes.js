import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import App from '../App'
import AppCoreModule from '../core/index'
import UserModule from '../app/users/index'

const { UsersListPage } = UserModule
const { NotFoundPage } = AppCoreModule

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/users" component={UsersListPage} />
      <Route path="/*" component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
)

export default Routes

