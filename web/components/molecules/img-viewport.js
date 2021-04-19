import React from 'react';
import ImageType1 from '../atoms/item-image1/item-image1';
import Grid from '@material-ui/core/Grid';


export default function Viewport(props) {

    const fetchImgData = () => {

    }

    const buildImgGrid = (imgData) => {
        return (
            <Grid container direction="row" justify="center" alignItems="center" spacing={2}>
                {imgData.map(
                    (data) => {
                        return (
                            <Grid item xs={12}>
                                <ImageType1 src={data.imageSrc}/>
                            </Grid>
                        )
                    }
                )}
            </Grid>
        )
    }

    return (
        <>
            {buildImgGrid(fetchImgData())}
        </>
    )
}