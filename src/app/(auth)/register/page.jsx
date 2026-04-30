'use client'
import React from "react";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { redirect } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { useForm, Controller } from "react-hook-form"; // ✅ import Controller

const RegisterPage = () => {
  const { control, handleSubmit, formState: { errors } } = useForm(); // ✅ use control, not register

  const handleRegisterFunc = async (data) => {
    const { name, photoUrl, email, password } = data;

    const { data: res, error } = await authClient.signUp.email({
      name,
      email,
      password,
      image: photoUrl,
      callbackURL: '/',
    });

console.error("Registration error:", JSON.stringify(error), error?.message, error?.status, error?.code);    if (res) alert("Registration successful! Please check your email to verify your account.");
  };

  return (
    <section className="min-h-[80vh] bg-slate-100 p-20">
      <Form
        className="flex border-2 rounded-lg border-gray-300 w-96 flex-col gap-4 wrapper py-5"
        onSubmit={handleSubmit(handleRegisterFunc)}
      >
        {/* ✅ Wrap each HeroUI field in Controller */}
        <Controller
          name="name"
          control={control}
          rules={{ required: "Name is required" }}
          render={({ field }) => (
            <TextField isRequired type="text" value={field.value ?? ""} onChange={field.onChange}>
              <Label>Name</Label>
              <Input placeholder="Enter your name" />
              {errors.name && <p className="text-red-500 text-xs">{errors.name.message}</p>}
              <FieldError />
            </TextField>
          )}
        />

        <Controller
          name="photoUrl"
          control={control}
          rules={{ required: "Photo URL is required" }}
          render={({ field }) => (
            <TextField isRequired type="text" value={field.value ?? ""} onChange={field.onChange}>
              <Label>Photo URL</Label>
              <Input placeholder="Enter your photo URL" />
              {errors.photoUrl && <p className="text-red-500 text-xs">{errors.photoUrl.message}</p>}
              <FieldError />
            </TextField>
          )}
        />

        <Controller
          name="email"
          control={control}
          rules={{ required: "Email is required" }} // ✅ fixed copy-paste bug ("Name is required")
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
          <Button type="submit" className="w-full bg-gray-800 rounded-md">
            <Check />
            Register
          </Button>
          <div className="flex gap-2 items-center text-xs">
            <p>Already have an account?</p>
            <Button type="button" variant="secondary" onClick={() => redirect("/login")}> {/* ✅ type="button" not "reset" */}
              Login
            </Button>
          </div>
        </div>
      </Form>
    </section>
  );
};

export default RegisterPage;