import { useNavigate, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Header from "../components/Header";

// Homepage content imports
import { Typography, Container } from '@mui/material';

import { themeSelection } from '../common/themes';

const backgroundImage = "/backgrounds/background-4.jpg"

export default function Home() {
  const navigate = useNavigate();

  const { currentUser } = useSelector(state => state.user);

  // Homepage contents logic

  return (
    <>
      {/* Header */}
      <Header isShowAbout={true} isShowProfile={true} isShowDashboard={true} isShowSignIn={true} isShowSignUp={true} />

      {/* Background */}
      <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh' }}>

        {/* Homepage content */}
        <Container maxWidth="xl" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
          <Typography variant="h3" sx={{ marginBottom: 4, color: themeSelection.palette.secondary.main, }}>
            Welcome to Todos 2.1
          </Typography>
          <Typography variant="h5" sx={{ marginBottom: 2, textAlign: 'center', color: themeSelection.palette.secondary.main }}>
            Organize. Prioritize. Achieve.
          </Typography>

          {/* Sign-in/Sign-up or Dashboard button  */}
          {currentUser ? (
            <button
              className='bg-primary text-secondary p-3 rounded-lg uppercase hover:opacity-75 disabled:opacity-50 mt-16'
              type='button'
              onClick={() => navigate("/dashboard")}
            >
              Dashboard
            </button>
          ) : (
            <>
              <button
                className='bg-primary text-secondary p-3 rounded-lg uppercase hover:opacity-75 disabled:opacity-50 mt-16'
                type='button'
                onClick={() => navigate("/sign-in")}
              >
                Sign In
              </button>
              <div className="flex gap-2 mt-5">
                <p className='text-secondary'>Do not have an account? </p>
                <Link to="/sign-up">
                  <span className='text-blue-500'>Sign up</span>
                </Link>
              </div>
            </>
          )}

        </Container> 

      </div> 
    </>
  )
}
