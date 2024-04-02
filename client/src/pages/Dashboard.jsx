// user authentication imports
import { useSelector } from 'react-redux';

import Header from "../components/Header";

// specific Dashboard imports
import React, { useState } from 'react';

import { Box, CssBaseline } from '@mui/material';

import { AppState } from "../providers/AppState.jsx";
import { AllTodosListIdAppState } from "../providers/AllTodosListIdAppState.jsx";
import AllTodoLists from '../components/AllTodoLists.jsx';
import { AppHeader } from "../components/AppHeader.jsx";
import { CurrentTodoList } from "../components/CurrentTodoList.jsx";


export default function Dashboard() {
    // user authentication logic
    const { currentUser } = useSelector(state => state.user);

    // Dashboard logic
    const [isListDeleted, setIsListDeleted] = useState(false);
    const [isListUpdated, setIsListUpdated] = useState(false);

    function handleListDelete() {
        setIsListDeleted(true);
    }

    function handleListUpdated() {
        setIsListUpdated(true);
    }


    return (
        <>
            {/* Header */}
            <Header isShowAbout={true} isShowProfile={true} isShowHome={true} />
            
            {/* Dashboard contents */}
            <AppState>
                <AllTodosListIdAppState>
                    <Box sx={{ display: 'flex' }}>
                        <CssBaseline />
                        <AppHeader
                            handleListUpdated={handleListUpdated}
                        />
                        
                        <AllTodoLists
                            isListUpdated={isListUpdated}
                            setIsListUpdated={setIsListUpdated}
                            handleListDelete={handleListDelete}

                        />
                        <CurrentTodoList
                            isListDeleted={isListDeleted}
                            setIsListDeleted={setIsListDeleted}
                            handleListUpdated={handleListUpdated}
                        />
                    </Box>
                </AllTodosListIdAppState>
            </AppState>

        </>
    )
}
