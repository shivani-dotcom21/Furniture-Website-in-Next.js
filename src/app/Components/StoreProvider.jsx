"use client";
import React, { useEffect } from "react";
import { store } from "../redux/store";
import { Provider } from "react-redux";

export default function StoreProvider({ children }) {
  useEffect(() => {
    window.localStorage.removeItem("Cart");
  }, []);
  return <Provider store={store}>{children}</Provider>;
}
