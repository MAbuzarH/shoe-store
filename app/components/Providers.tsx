"use client";
import { store } from "@/store/store";
import React from "react";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      {children}
      <Toaster />
    </Provider>
  );
};

export default Providers;