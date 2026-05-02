import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from '@react-oauth/google'
function GoogleButton() {
  const { googleLogin } = useContext(AuthContext)
  const navigate = useNavigate()
  const role = window.location.pathname === "/pro-signup" ? 'professional' : 'user'
  const handleSuccess = async (credentialResponse) => {
    try {
      await googleLogin({credential:credentialResponse.credential, role})
      if(role === 'user'){
        navigate('/')
      } else {
        navigate('/pro-dashboard')
      }
    } catch (error) {
      console.error('Google Authentication Error', error)
    }
  }

    const handleError = () => {
    console.error("Google Authentication was unsuccessful");
  };
  return (
    <button className="w-full flex items-center justify-center gap-3 py-2 px-4">
       <GoogleLogin
      onSuccess={handleSuccess}
      onError={handleError}
      theme="outline"
      size="large"
      text="continue_with"
      shape="pill"
      width="400"
    />
    </button>
  );
}

export default GoogleButton;
