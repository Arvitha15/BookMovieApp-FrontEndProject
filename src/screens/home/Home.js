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
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";


function Home() {

    const theme = createMuiTheme();



    const styleLevel = { 
        margin: theme.spacing.unit,
        minWidth:240,
        maxWidth:240
    };

    const movies = [
        {
            id: 1,
            poster_url: 'image',
            title: 'Image1',
            author: 'author',
        },
        {
            id: 2,
            poster_url: 'image',
            title: 'Image2',
            author: 'author',
        },
        {
            id: 3,
            poster_url: 'image',
            title: 'Image3',
            author: 'author',
        },
        {
            id: 4,
            poster_url: 'image',
            title: 'Image4',
            author: 'author',
        },
        {
            id: 5,
            poster_url: 'image',
            title: 'Image5',
            author: 'author',
        },
        {
            id: 6,
            poster_url: 'image',
            title: 'Image6',
            author: 'author',
        },
        {
            id: 7,
            poster_url: 'image',
            title: 'Image7',
            author: 'author',
        },
    ];


    return (
        <div>
            <Header />
            <div className="heading">Upcoming Movies</div>
            <div className="upcomingMoviesList">
                <GridList className="gridList" style={{ flexWrap: 'inherit' }} cols={6} cellHeight={250}>
                    {movies.map(tile => (
                        <GridListTile key={tile.id}>
                            <img src={tile.poster_url} alt={tile.title} />
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
                        {movies.map(tile => (  
                            <GridListTile key={tile.id} style={{ cursor: 'pointer' }}>
                                <Link to={"/movie/:"+tile.id} style={{textDecoration:"none"}}>
                                <img src={tile.poster_url} alt={tile.title} />
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
                            <Typography style={{ margin: theme.spacing.unit, color: theme.palette.primary.light, textAlign:"left" }}>FIND MOVIES BY:</Typography>
                            <FormControl>
                                <TextField style={styleLevel}
                                    label="Movie Name"
                                    className="textField"
                                />
                            </FormControl>
                            <FormControl style={styleLevel}>
                                <InputLabel>Generes</InputLabel>
                                <Select style={{ minWidth: 240, maxWidth:240 }}>
                                    {movies.map(tile => (
                                        <MenuItem value={tile.title} key={tile.id}>
                                            <Checkbox name={tile.title} value={tile.title} />
                                            {tile.title}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                            <FormControl style={styleLevel}>
                                <InputLabel>Artists</InputLabel>
                                <Select style={{ minWidth: 180 }}>
                                    {movies.map(tile => (
                                        <MenuItem value={tile.title} key={tile.id}>
                                            <Checkbox name={tile.title} value={tile.title} />
                                            {tile.title}
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
                            <br/><br/>
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