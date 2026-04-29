 'use client'
 import React from 'react'
import {Check} from "@gravity-ui/icons";
import {Button, Description, FieldError, Form, Input, Label, TextField} from "@heroui/react";
import { redirect } from 'next/navigation';

const LoginPage = () => {
  const onSubmit = (e) => {
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value
    console.log(email,password)
    
  };
  return (
 <section className='min-h-[80vh] bg-slate-100 p-20 '>

     <Form
      className="flex border-2 rounded-lg border-gray-300 w-96 flex-col gap-4 wrapper py-5 "
      render={(props) => <form {...props} data-custom="foo" />}
      onSubmit={onSubmit}
    >
      <TextField
        isRequired
        name="email"
        type="email"
        validate={(value) => {
          if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
            return "Please enter a valid email address";
          }
          return null;
        }}
      >
        <Label>Email</Label>
        <Input placeholder="john@example.com" />
        <FieldError />
      </TextField>
      <TextField
        isRequired
        minLength={8}
        name="password"
        type="password"
        validate={(value) => {
          if (value.length < 8) {
            return "Password must be at least 8 characters";
          }
          if (!/[A-Z]/.test(value)) {
            return "Password must contain at least one uppercase letter";
          }
          if (!/[0-9]/.test(value)) {
            return "Password must contain at least one number";
          }
          return null;
        }}
      >
        <Label>Password</Label>
        <Input placeholder="Enter your password" />
        <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
        <FieldError />
      </TextField>
      <div className="flex flex-col justify-center items-center gap-4">
        <Button type="submit" className={'w-full bg-gray-800 rounded-md '}>
          <Check />
          Login
        </Button>
       <div className="flex gap-2 items-center text-xs">
        <p>Don't have account? '</p>
         <Button type="reset" variant="secondary" onClick={()=>redirect('/register')} >
          Register!
        </Button>
       </div>
      </div>
    </Form>
 </section>
  )
}

export default LoginPage
