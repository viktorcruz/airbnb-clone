import React from "react";
import { IconButton } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search'
import { styled } from 'styled-components'
import HeaderRight from "./HeaderRight";

const StyledSearchBar = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
  background-color: #fff;
  border-radius: 999px;
  border: 1px solid lightgray;
  width: 100%;
  position: relative;
  margin-left: 40px;
  top: 0;
  left: 0;
  z-index: 10;
`
const StyledContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin: 10px 0;
`

const OptionStyled = styled.div`
    font-size: 14px;
    margin: 5px;
`
const HeaderMobileStyled = styled.div`
    display: grid;
    grid-template-columns: 1fr 10%;
    gap: 15px;
    width: 100%;
`

const StyledIconButton = styled(IconButton)`
    font-size: 15px;
`

const MobileHeaderCenter = () => {
    return (
        <HeaderMobileStyled>
            <StyledContent>
                <StyledSearchBar>
                    <StyledIconButton>
                        <SearchIcon />
                    </StyledIconButton>
                    <OptionStyled>
                        Anywhere
                    </OptionStyled>
                    <OptionStyled>
                        Any week
                    </OptionStyled>
                    <OptionStyled>
                        Add guests
                    </OptionStyled>
                </StyledSearchBar>
            </StyledContent>
            <StyledContent >
                <HeaderRight />
            </StyledContent>
        </HeaderMobileStyled>
    )
}

export default MobileHeaderCenter