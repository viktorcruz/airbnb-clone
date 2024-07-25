// AccountMenuButton.js
import React from "react";
import { IconButton, Avatar, Tooltip } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import styled from 'styled-components'

const StyledIconButton = styled(IconButton)`
    border-radius: 30px !important; 
    border-color: gray !important;
`

const AccountMenuButton = ({ handleClick, open }) => {
    return (
        <Tooltip title='Account settings'>
            <StyledIconButton
                onClick={handleClick}
                size="small"
                sx={{ ml: 1 }}
                aria-controls={open ? 'account-menu' : undefined}
                aria-haspopup='true'
                aria-expanded={open ? 'true' : undefined}
            >
                <MenuIcon style={{ margin: '0 10px' }} />
                <Avatar style={{ width: 33, height: 33 }} />
            </StyledIconButton>
        </Tooltip>
    )
}

export default AccountMenuButton