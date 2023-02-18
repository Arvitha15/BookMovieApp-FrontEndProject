import React from "react";
import Header from "../../common/header/Header";
import './Home.css';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

function Home() {


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

    return (
        <div>
            <Header />
            <div className="heading">Upcoming Movies</div>
            <div className="root">
                <GridList className="gridList" style={{flexWrap:'inherit'}} cols={6} cellHeight={250}>
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

        </div>
    )
}

export default Home;