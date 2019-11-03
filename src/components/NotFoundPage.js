import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
    <div>
        <h2>Not found</h2>
        <Link to="/list">Back to the list</Link>
    </div>
);

export default NotFoundPage;