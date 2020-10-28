import React from 'react'
import UserContext from '../actions/Store'

export default function MyApp({ Component, pageProps }) {
  return (
    <UserContext>
      <Component {...pageProps} />
    </UserContext>
  )
}