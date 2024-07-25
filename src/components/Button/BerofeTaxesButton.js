import React, { useState } from "react";
import { Button, Switch } from "@mui/material";
import styled from 'styled-components'


const P = styled.p`
    margin: 0;
    text-transform: capitalize;
`

const StyledButtonTaxes = styled(Button)`
    color: #000 !important;
    display: flex !important;
    align-items: center !important;
    font-size: 12px !important;
    justify-content: space-between !important;
    border: 1px solid #ccc !important;
    border-radius: 10px !important;
`

const BeforeTaxesButton = () => {
    const [checked, setChechek] = useState(true)

    const handleButtonClick = () => {
        setChechek((prevChecked) => !prevChecked)
    }
    const handleSwitchChange = (event) => {
        event.stopPropagation()
        setChechek(event.target.checked)
    }
    return (
        <StyledButtonTaxes variant="outlined" onClick={handleButtonClick}>
            <P>Total before taxes</P>
            <Switch
                color="default"
                checked={checked}
                onChange={handleSwitchChange}
                inputProps={{ 'aria-label': 'controlled' }}
            />
        </StyledButtonTaxes>
    )
}

export default BeforeTaxesButton