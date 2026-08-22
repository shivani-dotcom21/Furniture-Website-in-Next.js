import React from 'react'
import BreadCrums from '../Components/Common/BreadCrums/BreadCrums'
import Tables from '../Components/Cart/Tables'
import Coupon from '../Components/Cart/Coupon'
export const  metadata = {}

export default function CartPage() {
  metadata.title= "Shopping Cart"
  metadata.description = "Review the items in your cart before proceeding to checkout."
  return (
    <>
     <BreadCrums title='Shopping Cart '/>
     <Tables/>
     <Coupon/>
    </>
  )
}
