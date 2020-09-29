import React from 'react'
import Card from './Card'

function Wall() {
    return(
        <div className="container" style={{marginTop: "50px"}}>
            <div className="row">
                <div className="col col-l">
                <Card
                    heading="Facial Masque"
                    description="In our own quest to enhance total balance and reduce stress, we set out to understand, what is CBD"
                    imgurl={"..."}
                />
                </div>
                <div className="col col-r">
                <Card
                    heading="Body Matrix"
                    description="In our own quest to enhance total balance and reduce stress, we set out to understand, what is CBD"
                    imgurl={"..."}
                />
                </div>
            </div>
            <div className="row">
                <div className="col col-l">
                <Card
                    heading="Curcumin Softgels"
                    description="In our own quest to enhance total balance and reduce stress, we set out to understand, what is CBD"
                    imgurl={"..."}
                />
                </div>
                <div className="col col-r">
                <Card
                    heading="CBD Oil - Natural"
                    description="In our own quest to enhance total balance and reduce stress, we set out to understand, what is CBD"
                    imgurl={"..."}
                />
                </div>
            </div>
            <div className="row">
                <div className="col col-l">
                <Card
                    heading="Dog Chews"
                    description="In our own quest to enhance total balance and reduce stress, we set out to understand, what is CBD"
                    imgurl={"..."}
                />
                </div>
                <div className="col col-r">
                <Card
                    heading="Freeze Rub"
                    description="In our own quest to enhance total balance and reduce stress, we set out to understand, what is CBD"
                    imgurl={"..."}
                />
                </div>
            </div>
        </div>
    )
}

export default Wall