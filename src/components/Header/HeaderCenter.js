// HeaderCenter.js
import React, { useState, useRef } from "react";
import { motion } from 'framer-motion'
import { Typography, IconButton, Button } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import './HeaderCenter.scss'
import styled from 'styled-components'

const StyledSearchButton = styled(IconButton)`
    background-color: #FF385C !important;
    color: #fff !important;
    border-radius: 50% !important;
    margin-right: 10px !important;
    margin-top: 10px !important;
    width: 50px !important;  
    height: 50px !important;
 `

const StyledHeaderButton = styled(Button)`
    color: #000 !important;
 `


const HeaderCenter = ({
    expanded,
    setExpanded,
    inputValues,
    setInputValues,
    handleInputFocus,
    handleInputBlur,
    handleButtonClick
}) => {
    const destinationRef = useRef(null);
    const arrivalRef = useRef(null);
    const departureRef = useRef(null);
    const guestsRef = useRef(null);

    const [activeButton, setActiveButton] = useState(null)

    const getButtonStyle = (inputName) => {
        return {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            border: inputName === inputValues.focused ? '1px solid #fff' : '1px solid transparent',
            background: inputName === inputValues.focused ? 'ligthblue' : 'none',
            borderRadius: inputName === inputValues.focused ? '999px' : 'none'
        }
    }

    const isDimmed = (buttonName) => {
        return activeButton && activeButton !== buttonName ? 'dimmed' : ''
    }

    return (
        <motion.div
            layout
            style={{ backgroundColor: '#fff' }}
            className={`header__center ${expanded ? 'expanded' : 'collapsed'}`}
            initial={{ width: 400 }}
            animate={{ width: expanded ? 800 : 400 }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            onClick={(e) => e.stopPropagation()}
        >
            {!expanded ? (
                <div className="header__center-button">
                    <StyledHeaderButton disableRipple
                        onClick={(e) => handleButtonClick(e, destinationRef)}
                        className="btn btn-no-bg btn-no-shadow p-10" variant="contained">
                        Anywhere
                    </StyledHeaderButton>
                    <StyledHeaderButton disableRipple
                        onClick={(e) => handleButtonClick(e, arrivalRef)}
                        className="btn btn-no-bg btn-no-shadow p-10" variant="contained">
                        Any week
                    </StyledHeaderButton>
                    <StyledHeaderButton disableRipple
                        onClick={(e) => handleButtonClick(e, guestsRef)}
                        className="btn btn-no-bg btn-no-shadow p-10" variant="contained">
                        Add guests
                    </StyledHeaderButton>
                </div>
            ) : (
                <div className="header__center-button">
                    <Button
                        style={getButtonStyle('destination')}
                        className={`btn btn-destination p-15 ${isDimmed('destination')}`}
                        variant="outlined"
                        disableRipple
                        onClick={(e) => handleButtonClick(e, destinationRef, 'destination')}>
                        <Typography variant="caption" className="header__typography">Where</Typography>
                        <input
                            type="text"
                            name="destination"
                            placeholder="Search destinations"
                            className="header__input"
                            onFocus={() => handleInputFocus('destination')}
                            onBlur={handleInputBlur}
                            value={inputValues.destination}
                            ref={destinationRef}
                        />
                    </Button>
                    <Button
                        style={getButtonStyle('arrival')}
                        className={`btn btn-arrival p-15 ${isDimmed('arrival')}`}
                        variant="outlined"
                        disableRipple
                        onClick={(e) => handleButtonClick(e, arrivalRef, 'arrival')}>
                        <Typography variant="caption" className="header__typography">Check in</Typography>
                        <input
                            type="text"
                            name="arrival"
                            placeholder="Add dates"
                            className="header__input"
                            onFocus={() => handleInputFocus('arrival')}
                            onBlur={handleInputBlur}
                            value={inputValues.arrival}
                            ref={arrivalRef}
                        />
                    </Button>
                    <Button
                        style={getButtonStyle('departure')}
                        className={`btn btn-departure p-15 ${isDimmed('departure')}`}
                        variant="outlined"
                        disableRipple
                        onClick={(e) => handleButtonClick(e, departureRef, 'departure')}>
                        <Typography variant="caption" className="header__typography">Check out</Typography>
                        <input
                            type="text"
                            name="departure"
                            placeholder="Add dates"
                            className="header__input"
                            onFocus={() => handleInputFocus('departure')}
                            onBlur={handleInputBlur}
                            value={inputValues.departure}
                            ref={departureRef}
                        />
                    </Button>
                    <Button
                        style={getButtonStyle('guests')}
                        className={`btn btn-guests p-15 ${isDimmed('guests')}`}
                        variant="outlined"
                        disableRipple
                        onClick={(e) => handleButtonClick(e, guestsRef, 'guests')}>
                        <Typography variant="caption" className="header__typography">Who</Typography>
                        <input
                            type="text"
                            name="guests"
                            placeholder="Add guests"
                            className="header__input"
                            onFocus={() => handleInputFocus('guests')}
                            onBlur={handleInputBlur}
                            value={inputValues.guests}
                            ref={guestsRef}
                        />
                    </Button>
                    <StyledSearchButton
                        className={isDimmed('search')}>
                        <SearchIcon />
                    </StyledSearchButton>
                </div>
            )}
        </motion.div>
    )
}

export default HeaderCenter