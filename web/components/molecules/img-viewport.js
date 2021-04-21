import React from 'react';
import ImageType1 from '../atoms/item-image1/item-image1';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { spacing } from '@material-ui/system';
import Box from '@material-ui/core/Box';


export default function Viewport(props) {

    const fetchImgData = () => {
        return [
            {"imageSrc": "https://placekitten.com/640/360",
             "imageTitle" : "Title",
             "creatorName" : "Creator"},
             {"imageSrc": "https://placekitten.com/640/360",
             "imageTitle" : "Title",
             "creatorName" : "Creator"},
             {"imageSrc": "https://placekitten.com/640/360",
             "imageTitle" : "Title",
             "creatorName" : "Creator"},
             {"imageSrc": "https://placekitten.com/640/360",
             "imageTitle" : "Title",
             "creatorName" : "Creator"},
             {"imageSrc": "https://placekitten.com/640/360",
             "imageTitle" : "Title",
             "creatorName" : "Creator"},
             {"imageSrc": "https://placekitten.com/640/360",
             "imageTitle" : "Title",
             "creatorName" : "Creator"},
             {"imageSrc": "https://placekitten.com/640/360",
             "imageTitle" : "Title",
             "creatorName" : "Creator"},
             {"imageSrc": "https://placekitten.com/640/360",
             "imageTitle" : "Title",
             "creatorName" : "Creator"},
             {"imageSrc": "https://placekitten.com/640/360",
             "imageTitle" : "Title",
             "creatorName" : "Creator"},
             {"imageSrc": "https://placekitten.com/640/360",
             "imageTitle" : "Title",
             "creatorName" : "Creator"},
        ]
    }

    const buildImgGrid = (imgData) => {
        return (
            <Grid container direction="row" justify="center" alignItems="center" spacing={2}>
                {imgData.map(
                    (data) => {
                        return (
                            <Grid item xs={3} component={Box}>
                                
                                <Box paddingRight={2} display="inline">
                                    <Typography variant="h6" align="left" display="inline">
                                        {data.imageTitle}
                                    </Typography>
                                </Box>
                                <Box display="inline">
                                    <Typography variant="subtitle1" display="inline">
                                        {"By: " + data.creatorName}
                                    </Typography>
                                </Box>

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
            {
                buildImgGrid(fetchImgData())
            }
        </>
    )
}