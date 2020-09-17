import React from 'react';
import { Link } from "react-router-dom";


import './notFound.css';

const NotFound = () => {

    return (
            <div className="notFoundContainer">
                <span>Page Not Found</span>

                <Link className="reset" to={'/'}>
                    go back to home
                </Link>
            </div>
    );
};

export default NotFound;