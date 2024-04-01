import { useNavigate, Link } from "react-router-dom";
import { useSelector } from "react-redux";

import Header from "../components/Header";

const backgroundImage = "/backgrounds/background-1.jpg"

export default function Home() {
  const navigate = useNavigate();

  const { currentUser } = useSelector(state => state.user);

  return (
    <>
      {/* Header */}
      <Header isShowAbout={true} isShowProfile={true} isShowDashboard={true} isShowSignIn={true} isShowSignUp={true} />
      {/* <div style={{ backgroundImage: "url('../../public/backgrounds/background-1.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh' }}> */}
      <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh' }}>
      <div className='px-4, py-12 max-w-2xl mx-20'>
        <h1 className='text-3xl font-bold mb-4 text-slate-800'>Welcome to MERN Auth App</h1>
        <p className='mb-4 text-slate-700'>
          This is an example of authentication App using MERN (MongoDB, Express.js, React, Node.js) stack. It includes authentication features that allow uswer to sign up, login and logout and provides access to protected routes only for authenticated users.
        </p>
        <p className='mb-4 text-slate-700'>
          The front-end of the application is built with React and uses React Routes for client-side routing. The back-end is built with Express and Node.js, and uses MongoDB as database. Authentication is implemented using JSON Web Tokens (JWT).
        </p>
        <p className='mb-4 text-slate-700'>
          This application is intented as a starting point for building full-stack web applications with authentication using the MERN stack.
        </p>
        {/* Link to Sign In or to Dashboard */}
        {currentUser ? (
          <button
              className='bg-slate-600 text-slate-300 p-3 rounded-lg uppercase hover:opacity-75 disabled:opacity-50 mt-16'
              type='button'
              onClick={() => navigate("/dashboard")}
            >
              Dashboard
            </button>
        ) : ( 
          <>
            <button
              className='bg-slate-600 text-slate-300 p-3 rounded-lg uppercase hover:opacity-75 disabled:opacity-50 mt-16'
              type='button'
              onClick={() => navigate("/sign-in")}
            >
              Sign In
            </button>
            <div className="flex gap-2 mt-5">
              <p>Do not have an account? </p>
              <Link to="/sign-up">
                <span className='text-blue-500'>Sign up</span>
              </Link>
            </div>
          </>
        )
        }
        </div>
      </div>
    </>
  )
}
