import React from 'react'
import ImgViewport from '../molecules/img-viewport'
import NavBar from '../molecules/Navbar'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

export default function Home(props) {
    return (
        <>
            <NavBar/>
            <Grid item xs={12}>
                <Typography variant = "h1" align = "center">
                MARKETPLACE
                </Typography>
                <Typography variant = "h3" align = "center">
                    { "The NFT home for small and growing content creators"}
                </Typography>
            </Grid>
            <ImgViewport/>
        </>
    )
}