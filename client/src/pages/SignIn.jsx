import { useState } from "react"

import { Link, useNavigate } from "react-router-dom"

import { useDispatch, useSelector } from "react-redux"; // to dispatch action reducer functions
// redux action creators
import { signInStart, signInSuccess, signInFailure } from "../redux/user/userSlice.js";

import OAuth from "../components/OAuth.jsx";
import Header from "../components/Header.jsx";

const loginImage = "/backgrounds/login-1.jpg"


export default function SignIn() {
    const [formData, setFormData] = useState({});

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
            // initialize redux state - setLoading(true)
            dispatch(signInStart());

            // as we added a proxy in vite.config.js, we dont need to specify http://localhost:3000
            const res = await fetch("/server/auth/signin", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
            const data = await res.json();

            if (!data.success) {
                // error message is inside data
                // intead of setIsError(true)
                dispatch(signInFailure(data));
                return;
            }

            // intead of setIsLoading(false) we change the state of redux
            dispatch(signInSuccess(data));

            // user is authenticated; navigate to /
            navigate("/");

        } catch (err) {
            dispatch(signInFailure(err));
        }
    };

    return (
        <>
            {/* Header */}
            <Header isShowHome={true} isShowSignUp={true} />
            <div p-3 className='text-black max-w-lg mx-auto'>
                <div className="flex flex-col">
                    <h1 className="text-3xl text-center font-semibold my-7">Sign In</h1>
                    <img className="self-center" src={loginImage} alt="Register Image" style={{ maxWidth: '70%', height: 'auto' }} />
                </div>
                <form onSubmit={handleSubmit} className='flex flex-col justify-center gap-4'>
                    <input
                        type='email'
                        placeholder='Email'
                        id='email'
                        style={{ padding: "3" }}
                        className='bg-slate-100 border-slate-300 border-2 p-3 rounded-lg'
                        onChange={handleChange}
                    ></input>
                    <input
                        type='password'
                        placeholder='Password'
                        id='password'
                        style={{ padding: "3" }}
                        className='bg-slate-100 border-slate-300 border-2 p-3 rounded-lg'
                        onChange={handleChange}
                    ></input>
                    <button
                        disabled={isLoading}
                        className='bg-slate-600 text-slate-300 p-3 rounded-lg uppercase hover:opacity-75 disabled:opacity-50'
                    >
                        {isLoading ? "Loading..." : "Sign In"}
                    </button>
                    <OAuth />
                </form>
                <div className="flex gap-2 mt-5">
                    <p>Do not have an account? </p>
                    <Link to="/sign-up">
                        <span className='text-blue-500'>Sign up</span>
                    </Link>
                </div>
                <p className="text-red-700 mt-5">{isError && (isError.message || "Something went wrong")}</p>
            </div>
        </>
    )
}
