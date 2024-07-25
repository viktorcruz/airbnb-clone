import React from "react"
import './CardPhotoGallery.scss'
import { Button, Card, CardMedia, Grid } from "@mui/material"
import GrainIcon from '@mui/icons-material/Grain';

const CardPhotoGallery = ({ images }) => {
    return (
        <div className="card-photo-gallery">
            <Grid container spacing={2}>
                <Grid item xs={12} sm={8}>
                    <Card className="card-photo-gallery__main">
                        <CardMedia
                            component='img'
                            alt="Main image"
                            image={images[0]}
                            className="card-photo-gallery__image"
                        />
                    </Card>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Grid container spacing={2}>
                        {images.slice(1, 5).map((image, index) => (
                            <Grid item xs={6} key={index}>
                                <Card className="card-photo-gallery__main">
                                    <CardMedia
                                        component='img'
                                        alt={`Image ${index + 1}`}
                                        image={image}
                                        className="card-photo-gallery__small"
                                    />
                                </Card>
                            </Grid>
                        ))}
                        <Grid item xs={12}>
                            <Button variant="outlined" className="card-photo-gallery__show-more">
                                <GrainIcon style={{marginRight: 3}}/>
                                Show all photos
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default CardPhotoGallery