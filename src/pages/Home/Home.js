import { Grid } from "@mui/material"
import React from "react"
import Header from "../../components/Header/index"
import CarouselCards from "../../components/CarouselCard/index"
import properties from '../../constants/Properties'
import './Home.scss'
import styled from 'styled-components'

const StyledGrid = styled(Grid)`
    align-content: center;
    display: flex;
    justify-content: center; 
`

const Home = () => {
    return (
        <>
            <Header isHome={true} />
            <div className="home">
                <div className="home__section">
                    <Grid container justifyContent="center" alignItems="stretch" spacing={2}>
                        {properties.map((property, index) => (
                            <StyledGrid container xs={12} sm={6} md={4} lg={3} xl={2} key={index}>
                                <CarouselCards property={property} />
                            </StyledGrid>
                        ))}
                    </Grid>
                </div>
            </div>
        </>
    );
}

export default Home