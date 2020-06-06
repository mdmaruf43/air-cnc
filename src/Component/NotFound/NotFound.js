import React from 'react'
import './NotFound.css'
import { Link } from "react-router-dom";

function NotFound() {
    return (
        <div id="bcImg" className="d-flex justify-content-center align-items-end">
            <Link to="/">
                <h3>Back to Homepage</h3>
            </Link>
        </div>
    )
}

export default NotFound
