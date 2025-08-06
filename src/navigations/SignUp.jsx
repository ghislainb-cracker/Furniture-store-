import { React, useState } from "react";

const [username, email, password] = useState([]);

export const SignUp = () => {
    return(
        <>
        <div className="signup-container">
            <div className="welcome"></div>
            <div className="signup-form"></div>
        </div>
        </>
    )
}