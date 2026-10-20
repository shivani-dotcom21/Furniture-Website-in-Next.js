import React from "react";
import BreadCrums from "../Components/Common/BreadCrums/BreadCrums";
import Login from "../Components/Login/Login";
export const metadata = {}

export default function LoginPage() {
  metadata.title = "Login Your Account"
  metadata.description = "Enter your email and password below to access your account."
  return (
    <>
      <BreadCrums title="Sign-In" />
      <Login />
    </>
  );
}
