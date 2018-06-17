import React from 'react'
import ReactDOM from 'react-dom'
import dotenv from 'dotenv'
import 'react-table/react-table.css'
import './index.css'
import registerServiceWorker from './registerServiceWorker'
import AppLogger from './commons/logger/AppLogger'
import AppApolloProvider from './commons/apollo/AppApolloProvider'

// configure env vars
dotenv.config()
AppLogger.info('REACT_APP_GRAPHQL_PATH: ', process.env.REACT_APP_GRAPHQL_PATH)
AppLogger.info('REACT_APP_REFETCH_USERS_INTERVAL: ', process.env.REACT_APP_REFETCH_USERS_INTERVAL)

// render
ReactDOM.render(
  <AppApolloProvider />,
  document.getElementById('root'),
)
registerServiceWorker()
