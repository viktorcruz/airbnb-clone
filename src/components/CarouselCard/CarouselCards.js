import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Card, CardContent, Typography, IconButton } from '@mui/material'
import { useCarousel, useSliderSettings } from 'hooks/useCarousel'
import Slider from 'react-slick'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import StarIcon from '@mui/icons-material/Star'
import LoginDialog from 'components/Dialog/LoginDIalog'
import './CarouselCards.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components'

const StyledButton = styled(Button)`
 background-color: #fff !important;
 color: gray !important;
 border-radius: 999px !important;
 margin-left: 15px !important;
 text-transform: capitalize !important;
 padding: 0 10px !important;  
`

const StyledCardBody = styled.div`
 display: flex;
 align-self: center;
 justify-content: space-between;
`

const StyledTypography = styled(Typography)`
    font-size: 14px;
`
const StyledTypographyWeight = styled(Typography)`
     font-size: 14px;
     font-weight: 600;
`

const CarouselCards = ({ property }) => {
    const {        
        addFavorite,
        dialogOpen,
        handleCloseDialog,
        handleOpenDialog } = useCarousel();
    const settings = useSliderSettings();

    return (
        <>
            <Card className="card" style={{ borderRadius: '15px', boxShadow: 'none' }}>

                <Link to={`/property-details/${property.id}`} state={{ property }}>
                    <Slider {...settings}>
                        {property.images.map((image) => (
                            <img
                                key={image}
                                src={image}
                                alt={`property ${image}`}
                                className='carousel-image'
                            />
                        ))}
                    </Slider>
                </Link>
                <CardContent className='card-content'>
                    <div className="card-header">
                        <StyledButton variant="contained">
                            Guest favorite
                        </StyledButton>
                        <IconButton
                            className={`card-header__heart ${addFavorite ? 'active' : ''}`}
                            aria-label='add to favorite'
                            onClick={handleOpenDialog}
                        >
                            <FavoriteBorderIcon />
                        </IconButton>
                    </div>
                    <StyledCardBody>
                        <StyledTypographyWeight variant='body2'>
                            {property.title}
                        </StyledTypographyWeight>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <StarIcon style={{ fontSize: 17, margin: '3px' }} />
                            {property.rate}
                        </div>
                    </StyledCardBody>
                    <StyledTypography variant='body2'>
                        {property.location}
                    </StyledTypography>
                    <StyledTypography variant='body2'>
                        {property.distance} kilometers away
                    </StyledTypography>
                    <StyledTypography variant='body2'>
                        {property.date}
                    </StyledTypography>
                    <StyledTypographyWeight variant='body2'>
                        {property.price} night
                    </StyledTypographyWeight>
                </CardContent>

            </Card>
            <LoginDialog open={dialogOpen} onClose={handleCloseDialog} />
        </>
    );
};

export default CarouselCards
