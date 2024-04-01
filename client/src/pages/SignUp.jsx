import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux"; // to dispatch action reducer functions

import { signInStart, signInSuccess, signInFailure } from "../redux/user/userSlice.js";

import OAuth from "../components/OAuth";
import Header from "../components/Header.jsx";

const registerImage = "/backgrounds/signup-1.jpg"


export default function SignUp() {
  const [formData, setFormData] = useState({});
  // const [isError, setIsError] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);

  const { isLoading, isError } = useSelector((state) => state.user); // Slice name is "user" in userSlice.js

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  }

  const handleSubmit = async (e) => {
    // It prevents refreshing the page when we submit the form
    e.preventDefault();

    try {
      // setIsLoading(true);
      // setIsError(false);
      dispatch(signInStart());
      // as we added a proxy in vite.config.js, we dont need to specify http://localhost:3000
      const res = await fetch("/server/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();


      if (!data.success) {
        // error message is inside data
        // setIsError(true);
        dispatch(signInFailure(data));
        return;
      }

      // setIsLoading(false);
      dispatch(signInSuccess(data));

      // sign up is successfull; redirect to /
      navigate("/");

    } catch (err) {
      // setIsLoading(false);
      // setIsError(true);
      dispatch(signInFailure(err));
    }

  }

  return (
    <>
      {/* Header */}
      <Header isShowHome={true} isShowSignIn={true} />
      <div p-3 className='text-black max-w-lg mx-auto'>
        <div className="flex flex-col">
          <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>
          <img className="self-center" src={registerImage} alt="Register Image" style={{ maxWidth: '70%', height: 'auto' }} />
        </div>
        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
          <input
            type='text'
            placeholder='Username'
            id='username'
            style={{ padding: "3" }}
            className='bg-input-bg border-border border-2 p-3 rounded-lg'
            onChange={handleChange}
          ></input>
          <input
            type='email'
            placeholder='Email'
            id='email'
            style={{ padding: "3" }}
            className='bg-input-bg border-border border-2 p-3 rounded-lg'
            onChange={handleChange}
          ></input>
          <input
            type='password'
            placeholder='Password'
            id='password'
            style={{ padding: "3" }}
            className='bg-input-bg border-border border-2 p-3 rounded-lg'
            onChange={handleChange}
          ></input>
          <button
            disabled={isLoading}
            className='bg-primary text-secondary p-3 rounded-lg uppercase hover:opacity-75 disabled:opacity-50'
          >
            {isLoading ? "Loading..." : "Sign Up"}
          </button>
          <OAuth />
        </form>
        <div className="flex gap-2 mt-5">
          <p>Have an account? </p>
          <Link to="/sign-in">
            <span className='text-blue-500'>Sign In</span>
          </Link>
        </div>
        {/* <p className="text-red-700 mt-5">{isError && "Something went wrong"}</p> */}
        <p className="text-red-700 mt-5">{isError && (isError.message || "Something went wrong")}</p>
      </div>
    </>
  )
}
