'use client'

import { CardWrapper } from "@/components/auth/card-wrapper";
import RegisterForm from "@/components/auth/register-form";
import * as z from 'zod';
import { RegisterSchema } from "@/schema";
import { register } from "@/actions/register";
import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";

export default function SignUp() {
  
  return (
    <CardWrapper
      headerLabel="Enter your information to create an account "
      backButtonHref="/sign-in"
      backButtonLabel="Already have an account? Sign In"
      showSocial={true}
      title="Register"
    >
      <RegisterForm/>
    </CardWrapper>
  )
}


