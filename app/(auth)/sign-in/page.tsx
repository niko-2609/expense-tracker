import { CardWrapper } from '@/components/auth/card-wrapper'
import LoginForm from '@/components/auth/login-form'
import React from 'react'

function SignIn() {
  return (
    <CardWrapper
    headerLabel="Log into your account"
    backButtonHref="/sign-up"
    backButtonLabel="Dont have an account? Sign up"
    showSocial={true}
    title="Login"
  >
   <LoginForm/>
  </CardWrapper>
  )
}

export default SignIn
