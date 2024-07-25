// Header.js
import React from "react";
import { useLocation } from "react-router-dom";
import { useHeader } from "../../hooks/useHeader";
import { useMediaQuery } from "@mui/material";
import CarouselCardCategories from '../../components/CarouselCardCategorie'
import HeaderCenter from "./HeaderCenter";
import HeaderRight from "./HeaderRight";
import CarouselFiltersButton from "components/Button/CarouselFiltersButton";
import BeforeTaxesButton from "components/Button/BerofeTaxesButton";
import MobileHeader from './MobileHeader'
import MobileHeaderCenter from "./MobileHeaderCenter";
import './Header.scss'
import styled from 'styled-components'

const StyledIsNotMobile = styled.div`
    border-bottom: 1px solid #d4d4d4;
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: #fff;
`

const Header = ({ isHome }) => {
    const isMobile = useMediaQuery('(max-width: 767px)')
    const location = useLocation()
    const isPropertyDetailsPage = location.pathname.startsWith('/property-details')
    const {
        expanded,
        setExpanded,
        collapsed,
        inputValues,
        setInputValues,
        headerRef
    } = useHeader();


    const handleInputFocus = (inputName) => {
        setInputValues({ ...inputValues, focused: inputName })
    }

    const handleInputBlur = () => {
        setInputValues({ ...inputValues, focused: null })
    }

    const toggleHeader = () => {
        setExpanded(true);
    };

    const handleButtonClick = (event, ref, buttonName) => {
        event.stopPropagation();
        setExpanded(true);
        handleInputFocus(buttonName)

        setTimeout(() => {
            if (ref.current) {
                ref.current.focus();
            }
        }, 100)
    };

    return (
        <>
            <div
                className='header'
                ref={headerRef}
            >
                {isMobile ? (
                    <>
                        {isPropertyDetailsPage ? (
                            <>
                                <MobileHeader />
                            </>
                        ) : (
                            <MobileHeaderCenter />
                        )}
                    </>
                ) : (
                    <>
                        <HeaderRight />
                        <StyledIsNotMobile>
                            <HeaderCenter
                                expanded={expanded}
                                setExpanded={setExpanded}
                                inputValues={inputValues}
                                setInputValues={setInputValues}
                                handleInputFocus={handleInputFocus}
                                handleInputBlur={handleInputBlur}
                                handleButtonClick={handleButtonClick}
                            />
                        </StyledIsNotMobile>
                        {!expanded && isHome && (
                            <div className="header__carousel-buttons">
                                <div className="header__carousel-container">
                                    <CarouselCardCategories />
                                </div>
                                <div className="header__button-container">
                                    <CarouselFiltersButton />
                                    <BeforeTaxesButton />
                                </div>
                            </div>
                        )}
                    </>
                )}
            </div>

            {expanded && <div className="overlay show" onClick={toggleHeader}></div>}
        </>
    );
};

export default Header