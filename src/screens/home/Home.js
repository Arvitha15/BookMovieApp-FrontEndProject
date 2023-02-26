import React from "react";
import Header from "../../common/header/Header";
import './Home.css';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { createMuiTheme, FormControl } from "@material-ui/core";
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';


function Home() {

    const theme = createMuiTheme();
    const [movieList, setMovieList] = useState([]);
    const [genere, setGenere] = useState([]);
    const [artist, setArtist] = useState([]);



    const styleLevel = {
        margin: theme.spacing.unit,
        minWidth: 240,
        maxWidth: 240
    };


    async function getMoviesData() {

        const rawResponse = await fetch("http://localhost:8085/api/v1/movies?page=1&limit=20")
        const data = await rawResponse.json()

        setMovieList(data.movies);
    }
    useEffect(() => {
        getMoviesData();
    }, [])
    async function getGeneres() {

        const rawResponse = await fetch("http://localhost:8085/api/v1/genres")
        const data = await rawResponse.json()

        setGenere(data.genres);
    }
    useEffect(() => {
        getGeneres();
    }, [])

    async function getArtists() {

        const rawResponse = await fetch("http://localhost:8085/api/v1/artists?page=1&limit=100")
        const data = await rawResponse.json()

        setArtist(data.artists);
    }
    useEffect(() => {
        getArtists();
    }, [])




    return (
        <div>
            <Header />
            <div className="heading">Upcoming Movies</div>
            <div className="upcomingMoviesList">
                <GridList className="gridList" style={{ flexWrap: 'inherit' }} cols={6} cellHeight={250}>
                    {movieList.filter(x => x.status === "PUBLISHED").map(tile => (

                        <GridListTile key={tile.id}>

                            <img style={{ height: "inherit" }} src={tile.poster_url} alt={tile.title} />
                            <GridListTileBar className="root titlebar"
                                title={tile.title}
                            />

                        </GridListTile>

                    ))}

                </GridList>
            </div>
            <div className="container">
                <div className="leftPart">

                    <GridList className="releaseGridList" cols={4} cellHeight={350}>
                        {movieList.filter(x => x.status === "RELEASED").map(tile => (

                            <GridListTile key={tile.id} style={{ cursor: 'pointer' }}>
                                <Link to={"/movie/" + tile.id} style={{ textDecoration: "none" }}>
                                    <img style={{ height: "-webkit-fill-available", width: "-webkit-fill-available" }} src={tile.poster_url} alt={tile.title} />
                                    <GridListTileBar className="root titlebar"
                                        title={tile.title}
                                    />
                                </Link>
                            </GridListTile>


                        ))}
                    </GridList>

                </div>
                <div className="rightPart">

                    <Card className="cardData">
                        <CardContent style={styleLevel}>
                            <Typography style={{ margin: theme.spacing.unit, color: theme.palette.primary.light, textAlign: "left" }}>FIND MOVIES BY:</Typography>
                            <FormControl>
                                <TextField style={styleLevel}
                                    label="Movie Name"
                                    className="textField"
                                />
                            </FormControl>
                            <FormControl style={styleLevel}>
                                <InputLabel>Generes</InputLabel>
                                <Select style={{ minWidth: 240, maxWidth: 240 }}>
                                    {genere.map(tile => (
                                        <MenuItem value={tile.genre} key={tile.id}>
                                            <Checkbox name={tile.genre} value={tile.genre} />
                                            {tile.genre}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                            <FormControl style={styleLevel}>
                                <InputLabel>Artists</InputLabel>
                                <Select style={{ minWidth: 180 }}>
                                    {artist.map(tile => (
                                        <MenuItem value={tile.first_name + " " + tile.last_name} key={tile.id}>
                                            <Checkbox name={tile.first_name + " " + tile.last_name} value={tile.first_name + " " + tile.last_name} />
                                            {tile.first_name + " " + tile.last_name}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                            <FormControl style={styleLevel}>
                                <TextField style={{ minWidth: 180 }}
                                    id="date"
                                    label="Release Date Start"
                                    type="date"
                                    defaultValue="dd-mm-yyyy"

                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </FormControl>
                            <FormControl style={styleLevel}>
                                <TextField style={{ minWidth: 180 }}
                                    id="date"
                                    label="Release Date End"
                                    type="date"
                                    defaultValue="dd-mm-yyyy"

                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </FormControl>
                            <br /><br />
                            <FormControl>
                                <Button style={styleLevel} id="butn" variant="contained" color="primary">
                                    APPLY
                                </Button>
                            </FormControl>

                        </CardContent>
                    </Card>

                </div>
            </div>

        </div>
    )
}

export default Home;