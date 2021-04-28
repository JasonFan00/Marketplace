import React from 'react';
import ImageType1 from '../atoms/item-image1/item-image1';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { spacing } from '@material-ui/system';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    buttonNext: {
      float: "right",
    },
  });

export default function Viewport(props) {
    const classes = useStyles();

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

            <Box display="flex" alignItems="flex-start" justifyContent="space-between" flexDirection="row" flexWrap="nowrap">
                <Box order={1}>
                    <Button variant="outlined">Prev</Button>
                </Box>
                <Box order={2} alignSelf="flex-end">  
                    <Button className={classes.buttonNext} variant="outlined">Next</Button>
                </Box>
            </Box>

            <Grid container direction="row" justify="space-between">
                <Grid item xs={6}>
                    <Button variant="outlined">Prev</Button>
                </Grid>
                <Grid item xs={6}>
                    <Button className={classes.buttonNext} variant="outlined">Next</Button>
                </Grid>
            </Grid>
        </>
    )
}