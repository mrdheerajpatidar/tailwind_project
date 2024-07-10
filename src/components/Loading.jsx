import React, { useContext } from 'react';
import { AppContext } from '../appContexts/appContext';

const Loading = () => {
    const { loading } = useContext(AppContext);

    if (!loading) return null;

    return <div className="text-center mt-4 text-xl">Loading...</div>;
};

export default Loading;
