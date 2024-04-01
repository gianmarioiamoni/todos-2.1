import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth';

import { FaGoogle } from 'react-icons/fa';

import { app } from "../firebase";

import { useDispatch } from 'react-redux';
import { signInSuccess } from '../redux/user/userSlice';

import { useNavigate } from 'react-router-dom';

export default function OAuth() {
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const handleGoogleClick = async () => {
        try {
            console.log(import.meta.env.VITE_FIREBASE_API_KEY);
            const provider = new GoogleAuthProvider();
            const auth = getAuth(app);
            const result = await signInWithPopup(auth, provider);

            const res = await fetch("/server/auth/google", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"

                },
                body: JSON.stringify({
                    name: result.user.displayName,
                    email: result.user.email,
                    photo: result.user.photoURL
                })
            });
            // const userData = res.user;
            // console.log("userData = ", userData);
            const data = await res.json();
            
            dispatch(signInSuccess(data));

            // navigate to /
            navigate("/");

        } catch (error) {
            console.log("Could not login in with Google", error)
        }
    };


    return (
        <button
            type="button"
            onClick={handleGoogleClick}
            className='bg-red-700 text-white rounded-lg p-3 hover:opacity-75 flex items-center justify-center'>
            <FaGoogle
                style={{
                    color: "white",
                    marginRight: "8px", // right margin to separate icon from text 
                }}
            />
            <span>Continue with Google</span>
        </button>
    )
}
