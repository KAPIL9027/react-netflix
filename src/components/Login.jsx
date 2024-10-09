import React from "react";
import { useState, useRef } from "react";
import { validateCredentials } from "../utils/formValidation";
import { auth } from "../utils/firebase.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

import Header from "./Header.jsx";
const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const email = useRef(null);
  const username = useRef(null);
  const password = useRef(null);

  const handleToggleSignIn = () => {
    setIsSignIn(!isSignIn);
  };

  const singup = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        // ...
        updateProfile(auth.currentUser, {

          displayName: username.current.value,
        }).then((user)=>{
          console.log(user)
        })
        .catch((error)=>{
          console.log(error)
        })
      })
      .catch((error) => {
        const errorMessage = error.message;
        setErrorMessage(errorMessage);
        // ..
      });
  };

  const login =  (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then( (userCredential) => {
        // Signed in
        const user = userCredential.user;
         
       
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorMessage);
      });
  };

  const handleValidation = (email, password) => {
    const message = validateCredentials(email, password);
    if (message) {
      setErrorMessage(message);
    } else {
      setErrorMessage("");
      if (isSignIn) {
        login(email, password);
      } else {
        singup(email, password);
      }
    }
  };

  return (
    <div className="relative w-[100vw] h-[100vh]">
      <div className="z-10 absolute w-full h-full bg-black opacity-50"></div>
      <img
        className="absolute w-full h-full"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/85ff76db-39e5-423a-afbc-97d3e74db71b/null/IN-en-20240909-TRIFECTA-perspective_b22117e0-4610-4d57-a695-20f77d241a4a_small.jpg"
        alt="background-image"
      />
      <Header />
      <div className="absolute z-20 w-[20.833vw] h-[68.056vh] bg-black opacity-70 left-[41.667vw] top-[6.944vh] flex flex-col gap-[1vw] px-[54px] py-[68px] rounded-md">
        <p className="text-white font-bold text-2xl">
          {isSignIn ? "Sign In" : "Sign Up"}
        </p>
        {!isSignIn && (
          <div className="w-full text-white">
            <input
              ref={username}
              className="w-full p-[16px] bg-transparent border rounded-md"
              type="text"
              placeholder="Username"
            />
          </div>
        )}

        <div className="w-full text-white">
          <input
            ref={email}
            className="w-full p-[16px] bg-transparent border rounded-md"
            type="email"
            placeholder="Email or mobile number"
          />
        </div>
        <div className="w-full text-white">
          <input
            ref={password}
            className="w-full p-[16px]  bg-transparent border rounded-md"
            type="password"
            placeholder="Password"
          />
        </div>
        <div className="text-white w-full">
          <button
            className="w-full p-2 bg-red-700"
            type="submit"
            onClick={() =>
              handleValidation(email.current.value, password.current.value)
            }
          >
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>
        </div>
        {errorMessage && <div className="text-red-600">{errorMessage}</div>}
        <div className="text-white cursor-pointer" onClick={handleToggleSignIn}>
          <span className="font-medium text-gray-300">
            {!isSignIn ? "Already a user?" : "New to Netflix?"}
          </span>
          <span className="font-bold">
            {" "}
            {!isSignIn ? "Sign In now." : "Sign Up now."}{" "}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
