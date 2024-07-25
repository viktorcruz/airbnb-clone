import React from 'react'
import './PropertyDetailsPage.scss'
import CardPhotoGallery from '../../components/Card/index'
import { Container, Typography } from '@mui/material'
import { useLocation } from 'react-router-dom'
import Header from 'components/Header/Header'
import StarIcon from '@mui/icons-material/Star'
import ReservationForm from '../../components/Form/index'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

const PropertyDetailsPage = () => {
    // const { id } = useParams()
    const location = useLocation()
    const { property } = location.state || {}



    if (!property) {
        return <Typography variant='h6'>Property not found</Typography>
    }
    return (
        <>
            <Header isHome={false} />
            <div className='property-details' style={{ margin: '0 40px' }}>

                {/* Title */}
                <div className="property-details__title">
                    {property.title}
                </div>

                {/* Gallery */}
                <CardPhotoGallery images={property.images} />

                <section className='property-details__page'>
                    <div className="property-details__root">

                        {/* -- Info */}
                        <div className="property-details__info">
                            <Typography>
                                {property.title}
                            </Typography>
                            <Typography>
                                {property.location}
                            </Typography>
                            <Typography>
                                {property.distance} kilometers away
                            </Typography>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <StarIcon style={{ margin: '3px' }} />
                                {property.rate}
                            </div>
                        </div>
                        <div className="property-details__banner">
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <Container style={{ padding: 0, margin: 0 }}>
                                    <ReservationForm />
                                </Container>
                            </LocalizationProvider>

                        </div>
                    </div>

                </section>


                {/* -- Rate Reviews */}
                <div className="property-details__rate-reviews">
                </div>

                {/* -- Reviews */}
                <div className="property-details__reviews">
                </div>


                {/* -- Maps */}
                <div className="property-details__location">
                </div>

                {/* -- Footer */}
                <div className="property-details__footer">
                </div>

            </div>
        </>
    )
}

export default PropertyDetailsPage