import React from 'react';
import { AppContext} from './appContexts/appContext';
  import CardComponent from './components/cardComponent';
import Pagination from './components/Pagination';
import Loading from './components/Loading';

const App = () => {
    return (
        <AppContext>
            <Loading />
            <CardComponent />
            <Pagination />
        </AppContext>
    );
};

export default App;
