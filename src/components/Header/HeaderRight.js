// HeaderRight.js
import React, { useState } from "react";
import { Tune } from "@mui/icons-material";
import { IconButton, Typography } from '@mui/material'
import AccountMenu from "components/Menu/AccountMenu";
import AccountMenuButton from "components/Button/AccountMenuButton";
import Box from '@mui/material/Box';
import HeaderLogo from "./HeaderLogo";
import LanguageIcon from '@mui/icons-material/Language';
import './HeaderRight.scss'

const HeaderRight = () => {
    const [anchorEl, setAnchorEl] = useState(null)
    const open = Boolean(anchorEl)

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    return (
        <div className="header__content">
            <HeaderLogo />
            <div className="header__right" >
                <IconButton className="header__right-filter">
                    <Tune />
                </IconButton>
                <IconButton style={{ borderRadius: 30 }} className='header__right-host'>
                    <Typography variant="caption">
                        Become a host
                    </Typography>
                </IconButton>
                <IconButton style={{ marginLeft: 9 }} className='header__right-language'>
                    <LanguageIcon />
                </IconButton>
                <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }} className='header__right-account'>
                    <AccountMenuButton handleClick={handleClick} open={open} />
                </Box>
                <AccountMenu anchorEl={anchorEl} handleClose={handleClose} open={open} />
            </div>
        </div>
    )
}

export default HeaderRight