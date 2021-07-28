import React from 'react';
import Alert from './Alert';

const App = () => {
    return (
        <div className="container mt-5">
            <Alert text="Washington" />
            <Alert text="Nélio" />
            <Alert />
            <Alert />
        </div>
    );
}

export default App;
