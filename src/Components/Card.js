import React from 'react'

function Card(props) {
    return(
        <div className="card my-card" style={{maxWidth: "540px"}}>
            <div className="row">
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{props.heading}</h5>
                        <p className="card-text">{props.description}</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <img src={props.imgurl} className="card-img" alt="Loading..."/>
                </div>
            </div>
        </div>
    )
}

export default Card