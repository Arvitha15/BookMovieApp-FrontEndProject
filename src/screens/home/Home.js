import React, { useState } from "react";
import Header from "../../common/header/Header";
import './Home.css';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { MuiThemeProvider, createMuiTheme, FormControl } from "@material-ui/core";
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';


function Home() {

    const theme = createMuiTheme();



    const styleLevel = { margin: theme.spacing.unit };

    const movies = [
        {
            id: 1,
            poster_url: 'image',
            title: 'Image',
            author: 'author',
        },
        {
            id: 2,
            poster_url: 'image',
            title: 'Image',
            author: 'author',
        },
        {
            id: 3,
            poster_url: 'image',
            title: 'Image',
            author: 'author',
        },
        {
            id: 4,
            poster_url: 'image',
            title: 'Image',
            author: 'author',
        },
        {
            id: 5,
            poster_url: 'image',
            title: 'Image',
            author: 'author',
        },
        {
            id: 6,
            poster_url: 'image',
            title: 'Image',
            author: 'author',
        },
        {
            id: 7,
            poster_url: 'image',
            title: 'Image',
            author: 'author',
        },
    ];

    const[disId, setId] = useState([]);
    const getValue=(e)=>{
        let data=disId;
        data.push(e.target.value)
        setId(data)
        console.log(disId)
    }




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
                                <img src={tile.poster_url} alt={tile.title} />
                                <GridListTileBar className="root titlebar"
                                    title={tile.title}
                                />
                            </GridListTile>
                        ))}
                    </GridList>
                </div>
                <div className="rightPart">
                    <MuiThemeProvider theme={theme}>
                        <Card style={{ minWidth: 240, maxWidth: 240 }}>
                            <CardContent style={styleLevel}>
                                <Typography style={{ margin: theme.spacing.unit, color: theme.palette.primary.light }}>FIND MOVIES BY:</Typography>
                                <FormControl>
                                    <TextField style={styleLevel}
                                        label="Movie Name"
                                        className="textField"
                                    />
                                    <InputLabel style={{ marginLeft: '8px', 'marginTop': '56px' }}>Genres</InputLabel>
                                    <Select style={styleLevel}
                                    
                        >
                                        {movies.map(tile => (
                                            <MenuItem value={tile.id}>
                                                 <Checkbox defaultValue={1}  color="default" value={tile.id} 
                                                 onChange={(e)=>getValue(e)}  />
                                                {tile.id}</MenuItem>
                                        ))}
                                        


                                    </Select>
                                </FormControl>

                            </CardContent>
                        </Card>
                    </MuiThemeProvider>
                </div>
            </div>

        </div>
    )
}

export default Home;