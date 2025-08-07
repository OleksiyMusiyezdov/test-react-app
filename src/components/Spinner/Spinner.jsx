import React from 'react';
import './Spinner.css';

const Spinner = () => (
    <div className="spinner-container" role="status" aria-label="Loading">
        <div className="spinner" />
    </div>
);

export default Spinner;