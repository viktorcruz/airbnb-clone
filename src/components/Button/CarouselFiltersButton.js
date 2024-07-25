import { Button } from '@mui/material';
import React from "react";
import FilterIcon from '@mui/icons-material/Tune'
import './CarouselFiltersButton.scss'
import styled from 'styled-components'

const P = styled.p`
    margin: 0 5px; 
    textTransform: capitalize;
`
const StyledButtonFilter = styled(Button)`
    display: flex !important;
    align-items: center !important;
    font-size: 12px !important;
    justify-content: space-between !important;
    width: 200px !important;
    border: 1px solid #ccc !important;
    border-radius: 10px !important;
    width: 100px !important;
    color: #000 !important;
    text-transform: none !important;
`

const CarouselFiltersButton = () => {
    return (
        <StyledButtonFilter variant="outlined">
            <FilterIcon />
            <P>Filters</P>
        </StyledButtonFilter>
    )
}

export default CarouselFiltersButton