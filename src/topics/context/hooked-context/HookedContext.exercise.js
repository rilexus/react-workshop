import React, {useEffect} from 'react';

const contextDefaultValues = {
  authenticate: () => {},
  isAuthenticated: false
}

const AuthenticationContext = null

// Exercise: create a context with holds the authentication status of a user
export const AuthenticationProvider = () => {
  // provider authentication state
  return null
};

export function useAuthenticationContext() {
  // use authentication context
  const context = null
  return context
}

export const PrivateComponent = () => {
  const authenticationContext = useAuthenticationContext()

  useEffect(() => {
    authenticationContext.authenticate()
  }, [])

  return (
    authenticationContext.isAuthenticated
      ? (<div>Authenticated</div>)
      : null
  )
}

export const HookedAuthentication = () => {
  return (
    <AuthenticationProvider>
      <PrivateComponent/>
    </AuthenticationProvider>
  )
}


