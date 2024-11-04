import React from "react";

const SecondsCounter = ({seconds}) => {
    return (
        <div className="container-fluid">
            <div className="row bg-dark text-white p-5 mx-auto fa-5x">
                <div className="col">
                <i className="fa-regular fa-clock"></i>
                </div>

                <div className="col">
                0
                </div>

                <div className="col">
                0
                </div>

                <div className="col">
                0
                </div>

                <div className="col">
                0
                </div>

                <div className="col">
                {Math.floor(seconds/ 10) % 10}
                </div>

                <div className="col">
                {Math.floor(seconds/ 1) % 10}
                </div>

            </div>
            
        </div>
    );
};

export default SecondsCounter;