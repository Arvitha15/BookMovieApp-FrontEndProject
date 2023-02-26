import React, { useState, useEffect } from "react";
import Typography from '@material-ui/core/Typography';
import Header from "../../common/header/Header";
import './Details.css';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import { Link } from "react-router-dom";
import YouTube from "react-youtube";
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';


function Details({ match }) {
    const [rating, setRating] = useState(0);
    const [movieById, setMovieById] = useState([]);
    const [artist, setArtist] = useState([]);
    async function getMoviesDataById() {

        const rawResponse = await fetch("http://localhost:8085/api/v1/movies/" + (match.params.id))
        const data = await rawResponse.json()

        setMovieById(data);
        setArtist(data.artists);
    }
    useEffect(() => {
        getMoviesDataById();
    }, [])

    var movieUrl = movieById.trailer_url;
    if (typeof (movieUrl) === "string") {
        movieUrl = movieUrl.split("v=")[1].substring(0, 11);
    }
    else {
        movieUrl = "";
    }

    var d = new Date(movieById.release_date);
    var dateString = d.toDateString();

    return (
        <div>
            <Header />
            <Link to="/">
                <Typography id="backBtn" style={{ textAlign: "left" }}>&lt; Back to Home</Typography>
            </Link>
            <div className="remainingPart">
                <div className="firstPart">
                    <img src={movieById.poster_url} style={{ height: "inherit" }}></img>
                </div>
                <div className="middlePart">
                    <Typography variant="headline" component="h2">{movieById.title}</Typography>
                    <Typography variant="subtitle1" component="h2"><b>Genre:</b> {movieById.genres + ","}</Typography>
                    <Typography variant="subtitle1" component="h2"><b>Duration:</b> {movieById.duration}</Typography>
                    <Typography variant="subtitle1" component="h2"><b>Release Date:</b> {dateString}</Typography>
                    <Typography variant="subtitle1" component="h2"><b>Rating:</b> {movieById.rating}</Typography>
                    <Typography variant="subtitle1" component="h2" id="plot"><b>Plot:</b>
                        <a href={movieById.wiki_url} target="_blank">Wiki link</a> {movieById.storyline}</Typography>
                    <Typography variant="subtitle1" component="h2" id="trailer"><b>Trailer:</b></Typography>
                    <YouTube videoId={movieUrl}>

                    </YouTube>

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
                    <GridList className="releaseGridList" cols={2} cellHeight={150} >
                        {artist.map(tile => (

                            <GridListTile key={tile.id}>
                                <img style={{ height: "-webkit-fill-available" }} src={tile.profile_url} alt="img" />
                                <GridListTileBar className="root titlebar"
                                    title={tile.first_name + " " + tile.last_name}
                                />

                            </GridListTile>


                        ))}
                    </GridList>
                </div>
            </div>
        </div>
    )
}

export default Details;