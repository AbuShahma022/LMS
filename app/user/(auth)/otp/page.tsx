"use client";

import React from "react";
import { OTPForm } from "../../../Component/User/otp-form";

export default function OTPPage() {
  return (
    <div className="flex min-h-svh w-full">
      <div className="flex w-full items-center justify-center p-6 lg:w-1/2">
        <div className="w-full max-w-xs">
          <OTPForm />
        </div>
      </div>
      <div className="relative hidden w-1/2 items-center justify-center lg:flex">
        {React.createElement("dotlottie-wc", {
          src: "https://lottie.host/b69c9314-b55b-452b-9774-68ca8f67ca37/RtsmeVKrx3.lottie",
          style: { width: "100%", maxWidth: "500px", height: "500px" },
          autoplay: true,
          loop: true,
        })}
      </div>
    </div>
  );
}
