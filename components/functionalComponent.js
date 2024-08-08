import React from "react";

const YourComponent = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <p>{props.message}</p>
        </div>
    );
}; 

export default YourComponent;