import React from "react";
import google from "../assets/images/google.svg";
function GoogleButton() {
  return (
    <button className="w-full flex items-center justify-center gap-3 border border-gray-300 rounded-2xl py-2 px-4 hover:bg-secondary/5 transition duration-300 cursor-pointer">
      <img src={google} alt="google" className="w-7 h-auto" />
      <span className="font-medium text-gray-700">Continue with Google</span>
    </button>
  );
}

export default GoogleButton;
