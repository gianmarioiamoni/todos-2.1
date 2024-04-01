import { useNavigate } from 'react-router-dom';

import Header from "../components/Header";

const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    textAlign: 'center',
};


export default function NotFoundPage() {
    const navigate = useNavigate();

    return (
        <>
            {/* Header */}
            <Header isShowHome={true} />
            <div style={containerStyle}>
                <h1 className='text-3xl font-bold mb-4 text-slate-800'>Page Not Found</h1>
                <p className='mb-4 text-slate-700'>
                    The page you are looking for might have been removed or is temporarily unavailable.
                </p>
                <button
                    className='bg-slate-600 text-slate-300 p-3 rounded-lg uppercase hover:opacity-75 disabled:opacity-50 mt-16'
                    type='button'
                    onClick={() => navigate("/")}
                >
                    Go to Home Page
                </button>
            </div>
        </>
    );
};


