import React, { useState } from "react"
import { Link } from "react-router-dom";
import { Grid, Typography } from '@mui/material'
import AirbnbCategories from '../../constants/AirbnbCategories'
import ConfigurationCarousel from '../../constants/ConfigurationCarousel'
import Slider from 'react-slick'
import './CarouselCardCategories.scss'


const CarouselCardCategories = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleCategoryClick = (index) => {
        setActiveIndex(index);
    };

    return (
        <div className="category-carousel">
            <Slider {...ConfigurationCarousel} className="category-carousel__container">
                {AirbnbCategories.map((category, index) => (
                    <div key={index} className={`category-carousel__index ${index === activeIndex ? 'active' : ''} `}>
                        <Grid container direction="column" alignItems="center" className="category-carousel__grid">
                            <Link to='' className="category-carousel__link" onClick={() => handleCategoryClick(index)}>
                                <img src={category.icon} alt={category.label} width={45} />
                                <Typography variant="caption" className="category-carousel__info">
                                    {category.label}
                                </Typography>
                                {index === activeIndex && <div className="active-bar"></div>}
                            </Link>
                        </Grid>
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default CarouselCardCategories