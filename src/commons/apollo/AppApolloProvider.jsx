import React from 'react'
import { ApolloProvider } from 'react-apollo'

// app import
import Routes from '../../routes/Routes'
import AppApolloClient from './AppApolloClient'
import AppLogger from '../logger/AppLogger'


// define a Appolo Provider
const AppApolloProvider = () => {
  AppLogger.info('AppApolloProvider client : ', AppApolloClient)
  return (
    <ApolloProvider client={AppApolloClient}>
      <Routes />
    </ApolloProvider >
  )
}


export default AppApolloProvider

// to verify if apollo s well configured before start
/*
import gql from 'graphql-tag'
AppApolloClient
    .query({
      query: gql`
      {
        users{
          id,
          firstName,
          lastName,
          birthday,
          job
        }
      }`
    })
    .then(result => console.log('AppApolloClient result : ', result)) */
