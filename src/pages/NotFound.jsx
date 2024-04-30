import React from "react";
import { Link } from "react-router-dom";
import Button  from "react-bootstrap/Button";

const NotFound = () => {
    return(
        <>
            <div className="container text-center">
                <div className="display-1 text-danger">404 - Page Not Found</div>
                <p className="text-warning">The page you are looking for might have been removed, had its name changed or is temporaly unavailable</p>
                <Button as = {Link} to = {"/"} variant = "outline-primary">Go To Home Page</Button>
            </div>
        </>
    );
};
export default NotFound;