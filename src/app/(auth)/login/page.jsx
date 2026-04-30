'use client'
import React from 'react'
import { Check } from "@gravity-ui/icons";
import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import { useRouter } from 'next/navigation'; // ✅ useRouter instead of redirect
import { useForm, Controller } from 'react-hook-form'; // ✅ import Controller
import { authClient } from '@/lib/auth-client';

const LoginPage = () => {
  const router = useRouter(); // ✅ client-side navigation
  const { control, handleSubmit, formState: { errors } } = useForm(); // ✅ control, not register

  const handleLoginFunc = async (data) => {
    const { email, password } = data;

    const { data: res, error } = await authClient.signIn.email({
      email,
      password,
      rememberMe: true,
      callbackURL: "/",
    });

    if (error) {
      const message = error?.message || error?.statusText || "Login failed. Please try again.";
      alert(message); // replace with toast if you have one
      return;
    }

    if (res) {
      alert("Login successful! Redirecting to homepage...");
      router.push('/'); // ✅ programmatic navigation
    }
  };

  return (
    <section className='min-h-[80vh] bg-slate-100 p-20'>
      <Form
        className="flex border-2 rounded-lg border-gray-300 w-96 flex-col gap-4 wrapper py-5"
        onSubmit={handleSubmit(handleLoginFunc)}
      >
        {/* ✅ Controller instead of register spread */}
        <Controller
          name="email"
          control={control}
          rules={{ required: "Email is required" }}
          render={({ field }) => (
            <TextField isRequired type="email" value={field.value ?? ""} onChange={field.onChange}>
              <Label>Email</Label>
              <Input placeholder="john@example.com" />
              {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
              <FieldError />
            </TextField>
          )}
        />

        <Controller
          name="password"
          control={control}
          rules={{ required: "Password is required" }}
          render={({ field }) => (
            <TextField isRequired minLength={8} type="password" value={field.value ?? ""} onChange={field.onChange}>
              <Label>Password</Label>
              <Input placeholder="Enter your password" />
              {errors.password && <p className="text-red-500 text-xs">{errors.password.message}</p>}
              <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
              <FieldError />
            </TextField>
          )}
        />

        <div className="flex flex-col justify-center items-center gap-4">
          <Button type="submit" className='w-full bg-gray-800 rounded-md'>
            <Check />
            Login
          </Button>
          <div className="flex gap-2 items-center text-xs">
            <p>Don't have an account?</p>
            <Button type="button" variant="secondary" onClick={() => router.push('/register')}> {/* ✅ type="button" */}
              Register!
            </Button>
          </div>
        </div>
      </Form>
    </section>
  );
};

export default LoginPage;