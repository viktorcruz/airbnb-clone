import React from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBackIos'
import styled from 'styled-components'
import { Link } from "react-router-dom";

const P = styled.p`
    font-size: 16px;
    font-weight: 600;
`

const StyledMobile = styled.div`
    height: 64px !important;
    display: flex !important;
    align-items: start !important;
    justify-content: start !important;
    align-items: center !important;
    padding: 10px !important;
    background-color: #fff !important;
    margin-left: 30px !important;
`

const StyledLink = styled(Link)`
    display: flex !important; 
    align-items: center !important;
`

const MobileHeader = () => {
    return (
        <StyledMobile>
            <StyledLink to='/'>
                <ArrowBackIcon />
                <P>
                    Homes
                </P>
            </StyledLink>
        </StyledMobile>
    )
}

export default MobileHeader