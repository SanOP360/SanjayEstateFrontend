import React from "react";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import { app } from "../firebase";
import axios from "axios";
import { useDispatch } from "react-redux";
import { signInSuccess } from "../redux/User/userSlice";
import { useNavigate } from "react-router-dom";

const baseUrl = "http://localhost:10000";

export default function OAuth() {
  const dispatch = useDispatch();
  const Navigate=useNavigate();

  const handleGoogleClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);
      const result = await signInWithPopup(auth, provider);

      const res = await axios.post(
        `${baseUrl}/api/auth/google`,
        { 
          name: result.user.displayName,
          email: result.user.email,
          photo: result.user.photoURL,
        },{
          withCredentials:true
        }
      );

      console.log(res);
      dispatch(signInSuccess(res.data));
      Navigate('/')
      
    } catch (error) {
      console.log("Could not sign in with Google", error);
    }
  };

  return (
    <button
      type="button"
      className="bg-red-700 text-white rounded-lg uppercase p-3 hover:opacity-90"
      onClick={handleGoogleClick}
    >
      Continue with Google
    </button>
  );
}
