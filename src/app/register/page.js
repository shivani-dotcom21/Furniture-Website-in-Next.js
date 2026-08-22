import React from 'react'
import BreadCrums from '../Components/Common/BreadCrums/BreadCrums'
import Register from '../Components/Register/Register'
export const metadata = {}

export default function page() {
    metadata.title = "Register Your Account"
    metadata.description = "Create an account to track orders, save favorite items, and enjoy a personalized shopping experience."
  return (
    <>
     <BreadCrums title='My Account'/>
     <Register/>
    </>
  )
}

