import React from "react";
import Typography from '@material-ui/core/Typography';
import Header from "../../common/header/Header";
import './Details.css';

function Details(){

    return(
        <div>
            <Header/>
            <Typography id="backBtn">&lt; Back to Home</Typography>
            <div className="remainingPart">
                <div className="firstPart">first</div>
                <div className="middlePart">middle</div>
                <div className="lastPart">last</div>
            </div>
        </div>
    )
}

export default Details;