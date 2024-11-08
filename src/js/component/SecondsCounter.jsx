import React from "react";

const SecondsCounter = ({seconds}) => {
    return (
        <div className="container-fluid">
            <div className="row bg-dark text-white p-5 mx-auto fa-5x">
                <div className="col d-flex justify-content-center align-items-center bg-dark bg-gradient border border-dark rounded mb-3 mx-3" style={{ width: '100px', height: '190px'}}>
                <i className="fa-regular fa-clock"></i>
                </div>

                <div className="col d-flex justify-content-center align-items-center bg-dark bg-gradient border border-dark rounded  mb-3 mx-3" style={{ width: '100px', height: '190px'}} >
                0
                </div>

                <div className="col d-flex justify-content-center align-items-center bg-dark bg-gradient border border-dark rounded  mb-3 mx-3" style={{ width: '100px', height: '190px'}}>
                0
                </div>

                <div className="col d-flex justify-content-center align-items-center bg-dark bg-gradient border border-dark rounded  mb-3 mx-3" style={{ width: '100px', height: '190px'}}>
                0
                </div>

                <div className="col d-flex justify-content-center align-items-center bg-dark bg-gradient border border-dark rounded  mb-3 mx-3" style={{ width: '100px', height: '190px'}}>
                0
                </div>

                <div className="col d-flex justify-content-center align-items-center bg-dark bg-gradient border border-dark rounded  mb-3 mx-3" style={{ width: '100px', height: '190px'}}>
                {Math.floor(seconds/ 10) % 10}
                </div>

                <div className="col d-flex justify-content-center align-items-center bg-dark bg-gradient border border-dark rounded  mb-3 mx-3" style={{ width: '100px', height: '190px'}}>
                {Math.floor(seconds/ 1) % 10}
                </div>

            </div>
            
        </div>
    );
};

export default SecondsCounter;