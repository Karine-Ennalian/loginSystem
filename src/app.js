import React from 'react'
import GlobalStyles from './styles/global';
import RoutesApp from './routes/router';
import { AuthProvider } from './contexts/auth.js';

const App = () => {
    return (
        <AuthProvider>
            <RoutesApp/>
            <GlobalStyles/>
        </AuthProvider>
    );
};

export default App;