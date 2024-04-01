import { useSelector } from 'react-redux';

import Header from "../components/Header";


export default function Dashboard() {
    const { currentUser } = useSelector(state => state.user);


    return (
        <>
            {/* Header */}
            <Header isShowAbout={true} isShowProfile={true} isShowHome={true} />
            <div className='px-4, py-12 max-w-2xl mx-auto'>
                <h1 className='text-3xl font-bold mb-4 text-title'>Dashboard</h1>
                <p className='mb-4 text-text'>
                    This is a protected Dashboard.
                </p>
                <p className='mb-4 text-text'>
                    {`You are authenticated as user: ${currentUser.username}`}
                </p>
            </div>
        </>
    )
}
