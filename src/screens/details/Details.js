import React, { useState } from "react";
import Typography from '@material-ui/core/Typography';
import Header from "../../common/header/Header";
import './Details.css';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import { Link } from "react-router-dom";

function Details() {
    const [rating, setRating] = useState(0);
    return (
        <div>
            <Header />
            <Link to="/">
            <Typography id="backBtn" style={{textAlign:"left"}}>&lt; Back to Home</Typography>
            </Link>
            <div className="remainingPart">
                <div className="firstPart">first</div>
                <div className="middlePart">
                    <Typography variant="headline" component="h2">movie titile</Typography>
                    <Typography variant="subtitle2" component="h2">Duration:</Typography>
                    <Typography variant="subtitle2" component="h2">Release Date:</Typography>
                    <Typography variant="subtitle2" component="h2">Rating:</Typography>
                    <Typography variant="subtitle2" component="h2" id="plot">Plot:</Typography>
                    <Typography variant="subtitle2" component="h2" id="trailer">Trailer:</Typography>

                </div>
                <div className="lastPart">
                    <div>
                        <Typography variant="subtitle2" component="h2">Rate this movie:</Typography>
                        <div className="start-rating">
                            {[...Array(5)].map((star, index) => {
                                index += 1;
                                return (
                                    <StarBorderOutlinedIcon style={{ cursor: "pointer" }}
                                        key={index}
                                        className={index <= rating ? "on" : "off"}
                                        onClick={() => setRating(index)}
                                    >

                                    </StarBorderOutlinedIcon>
                                );
                            })}
                        </div>

                    </div>

                    <Typography variant="subtitle2" component="h2">Artists:</Typography>
                </div>
            </div>
        </div>
    )
}

export default Details;