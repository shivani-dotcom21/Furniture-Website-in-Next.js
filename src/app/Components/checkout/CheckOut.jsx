"use client";
import Link from "next/link";
import { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useRazorpay } from "react-razorpay";
// toast.success("Order placed successfully!");

let orderItems = [
  {
    id: 1,
    name: "Erica Bookshelf - Brown",
    image:
      "https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1620077669499Erica%20Bookshelfs_brown.jpg",
    sale_price: 2500,
    quantity: 1,
  },
  {
    id: 2,
    name: "Erica Bookshelf - Gray",
    image:
      "https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1620077669499Erica%20Bookshelfs_brown.jpg",
    sale_price: 4500,
    quantity: 2,
  },
];

let initialAddress = {
  name: "",
  phone: "",
  email: "",
  address: "",
  city: "",
  postalCode: "",
  country: "India",
};

export default function CheckOut() {
  const { Razorpay, isLoading, error } = useRazorpay();

  let apiBaseApi = process.env.NEXT_PUBLIC_APIBASEURL;
  let token = useSelector((allstore) => allstore.auth.token);

  let [paymentMethod, setPaymentMethod] = useState("cod");
  let [shippingAddress, setShippingAddress] = useState(initialAddress);

  let handleAddressChange = (e) => {
    setShippingAddress({
      ...shippingAddress,
      [e.target.name]: e.target.value,
    });
  };

  let subTotal = orderItems.reduce(
    (total, items) => total + items.sale_price * items.quantity,
    0,
  );
  // let grandTotal = subTotal + SHIPPING_CHARGE;

  let placeOrder = (e) => {
    e.preventDefault();
    let orderData = {
      orderItems,
      shippingAddress,
      paymentMethod,
      totalAmount: subTotal,
    };
    axios
      .post(`${apiBaseApi}order/place-order`, orderData, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => res.data)
      .then((finalRes) => {
        if (paymentMethod == "cod") {
          if (finalRes.status) {
          }
        } else {
          let { amount_due, currency, id } = finalRes.data;

          const options = {
            key: "rzp_test_TptCp7MA0ZKo4U", // Obtained from Dashboard
            amount: "amount_due", // Amount in currency subunits (e.g., 50000 paise = ₹500)
            currency: "currency",
            name: "Furniture Website",
            description: "Furniture Webisite",
            order_id: id, // Pass the backend generated order_id
            handler: function (response) {
              // Handle successful payment verification here
              console.log("Payment Success:", response);
              alert(`Payment ID: ${response.razorpay_payment_id}`);
            },
            prefill: {
              name: "Aloshi",
              email: "asaloshi1@gmail.com",
              contact: "2626262626",
            },
            theme: {
              color: "#3399cc",
            },
          };

          const rzp = new Razorpay(options);
          rzp.open();
        }
      });
  };

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-10 font-outfit text-gray-700 sm:px-6 lg:px-8 lg:py-16">
      <div className="mb-10 flex items-center justify-center">
        <div className="flex items-center gap-3 text-sm sm:gap-5">
          <div className=" font-semibold text-gray-900">Order</div>
          <span className="h-px w-10 bg-gray-300 sm:w-20" />
          <div className=" text-gray-500">Shipping</div>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1fr_1.15fr] lg:gap-10">
        <div className="h-fit rounded border border-gray-200 bg-white p-5 sm:p-7">
          <div className="mb-6 border-b border-gray-200 pb-4">
            <div>
              <h2 className="font-poppins text-xl font-semibold text-gray-900">
                Order
              </h2>
              <p className="mt-1 text-sm text-gray-500">
                Review your furniture before placing your order.
              </p>
            </div>
          </div>

          {/* 1. Sirf product items ke liye map chalayein */}
          <div className="space-y-4">
            {orderItems.map((items) => (
              <div
                key={items.id}
                className="flex gap-4 border-b border-gray-200 pb-5"
              >
                <img
                  src={items.image}
                  alt={items.name}
                  className="h-24 w-24 rounded bg-gray-100 object-cover"
                />
                <div className="flex flex-1 flex-col justify-between gap-2 sm:flex-row sm:items-start">
                  <div>
                    <h3 className="font-medium text-gray-900">{items.name}</h3>
                    <p className="mt-1 text-sm text-gray-500">
                      Quantity: {items.quantity}
                    </p>
                  </div>
                  <p className="font-semibold text-gray-900">
                    Rs. {items.sale_price}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* 2. Map ke bahar final Subtotal aur Total section rakhein */}
          <div className="mt-5 space-y-3 text-sm border-t border-gray-200 pt-4">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span className="font-medium text-gray-900">
                Rs.{" "}
                {orderItems.reduce(
                  (total, item) => total + item.sale_price * item.quantity,
                  0,
                )}
              </span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span className="font-medium text-green-700">Free</span>
            </div>
            <div className="flex justify-between border-t border-gray-200 pt-4 text-base font-semibold text-gray-900">
              <span>Total</span>
              <span>
                Rs.{" "}
                {orderItems.reduce(
                  (total, item) => total + item.sale_price * item.quantity,
                  0,
                )}
              </span>
            </div>
          </div>

          <Link
            href="/cart"
            className="mt-6 inline-block text-sm font-medium text-amber transition hover:text-gray-900"
          >
            ← Return to cart
          </Link>
        </div>

        <div className="space-y-8">
          <section className="rounded border border-gray-200 bg-white p-5 sm:p-7">
            <div className="mb-6 border-b border-gray-200 pb-4">
              <div>
                <h2 className="font-poppins text-xl font-semibold text-gray-900">
                  Shipping
                </h2>
                <p className="mt-1 text-sm text-gray-500">
                  Where should we deliver your order?
                </p>
              </div>
            </div>

            <form onSubmit={placeOrder} className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-gray-700 sm:col-span-2"
                >
                  Full name
                  <input
                    type="text"
                    name="name"
                    value={shippingAddress?.name || ""}
                    onChange={handleAddressChange}
                    placeholder="Enter your full name"
                    autoComplete="name"
                    className="mt-2 w-full rounded border border-gray-300 px-4 py-3 text-sm text-gray-800 outline-none transition focus:border-amber"
                  />
                </label>
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-gray-700"
                >
                  Email address
                  <input
                    type="email"
                    name="email"
                    value={shippingAddress?.email || ""}
                    onChange={handleAddressChange}
                    placeholder="you@example.com"
                    autoComplete="email"
                    className="mt-2 w-full rounded border border-gray-300 px-4 py-3 text-sm text-gray-800 outline-none transition focus:border-amber"
                  />
                </label>
                <label
                  htmlFor="phone"
                  className="text-sm font-medium text-gray-700"
                >
                  Phone number
                  <input
                    type="tel"
                    name="phone"
                    value={shippingAddress?.phone || ""}
                    onChange={handleAddressChange}
                    placeholder="+91"
                    autoComplete="tel"
                    className="mt-2 w-full rounded border border-gray-300 px-4 py-3 text-sm text-gray-800 outline-none transition focus:border-amber"
                  />
                </label>
                <label
                  htmlFor="address"
                  className="text-sm font-medium text-gray-700 sm:col-span-2"
                >
                  Street address
                  <input
                    type="text"
                    name="address"
                    value={shippingAddress?.address || ""}
                    onChange={handleAddressChange}
                    placeholder="House number and street name"
                    autoComplete="street-address"
                    className="mt-2 w-full rounded border border-gray-300 px-4 py-3 text-sm text-gray-800 outline-none transition focus:border-amber"
                  />
                </label>
                <label
                  htmlFor="city"
                  className="text-sm font-medium text-gray-700"
                >
                  City
                  <input
                    type="text"
                    name="city"
                    value={shippingAddress?.city}
                    onChange={handleAddressChange}
                    placeholder="City"
                    autoComplete="address-level2"
                    className="mt-2 w-full rounded border border-gray-300 px-4 py-3 text-sm text-gray-800 outline-none transition focus:border-amber"
                  />
                </label>
                <label
                  htmlFor="postalCode"
                  className="text-sm font-medium text-gray-700"
                >
                  Postal code
                  <input
                    type="text"
                    name="postalCode"
                    value={shippingAddress?.postalCode}
                    onChange={handleAddressChange}
                    placeholder="Postal code"
                    autoComplete="postal-code"
                    className="mt-2 w-full rounded border border-gray-300 px-4 py-3 text-sm text-gray-800 outline-none transition focus:border-amber"
                  />
                </label>
              </div>

              <div className="rounded border border-gray-200 bg-white p-5 sm:p-7 mt-5">
                <div className="mb-5 border-b border-gray-200 pb-4">
                  <h2 className="font-poppins text-xl font-semibold text-gray-900">
                    Payment Method
                  </h2>
                  <p className="mt-1 text-sm text-gray-500">
                    Choose how you would like to pay.
                  </p>
                </div>

                <label className="flex cursor-pointer items-start gap-3 rounded border border-amber bg-amber/5 p-4">
                  <input
                    type="radio"
                    name="paymentMethod"
                    checked={paymentMethod === "cod"}
                    value="cod"
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="mt-1 accent-[#c09578]"
                  />
                  <span>
                    <span className="block font-medium text-gray-900">
                      Cash on Delivery
                    </span>
                    <span className="mt-1 block text-sm text-gray-500">
                      Pay in cash when your furniture is delivered.
                    </span>
                  </span>
                </label>
                <label className="flex cursor-pointer items-start gap-3 rounded border border-gray-200 p-4 transition hover:border-amber">
                  <input
                    type="radio"
                    name="paymentMethod"
                    checked={paymentMethod === "online"}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    value="online"
                    className="mt-1 accent-[#c09578]"
                  />
                  <span>
                    <span className="block font-medium text-gray-900">UPI</span>
                    <span className="mt-1 block text-sm text-gray-500">
                      Pay securely using your UPI app.
                    </span>
                  </span>
                </label>

                <button
                  type="submit"
                  className="mt-3 w-full rounded bg-amber px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#a77b5f]"
                >
                  Place Order
                </button>
              </div>
            </form>
          </section>
        </div>
      </div>
    </main>
  );
}
