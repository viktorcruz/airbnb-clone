import React from "react";
import { Button, Typography, IconButton, TextField, Dialog, DialogActions, DialogContent, DialogTitle, Divider } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';
import EmailIcon from '@mui/icons-material/Email';
import CloseIcon from '@mui/icons-material/Close'
import styled from 'styled-components'


const StyledDialog = styled(Dialog)`
    border-radius: 13px !important;
`

const StyledDialogActions = styled(DialogActions)`
    position: absolute !important;
    left: 10px !important;  
    padding: 0 !important;
    margin: 0 !important;
    top: 5px !important;
`

const StyledDialogTitle = styled(DialogTitle)`
    display: flex !important;
    justify-content: center !important;
    border-bottom: 1px solid lightgray !important;
`

const StyledDialogContent = styled(DialogContent)`
    paddingTop: 20px !important;
`

const StyledSocialMedia = styled(Button)`
    border-radius: 7px !important;
    height: 45px !important;
    display: flex !important;
    align-items: center !important;
    justify-content: flex-start !important;
    margin-bottom: 10px !important;
    text-transform: none !important;
    padding-left: 10px !important;

    .MuiSvgIcon-root {
        margin-right: 10px;
    }

    &.facebook,
    &.apple{
        margin-bottom: 10px !important;
    }
`
const StyledButtonContinue = styled(Button)`
    height: 45px !important;
    background-color: #FF385C !important;
    text-transform: none !important;
`
const StyledSocialMediaDiv = styled.div`
    display: flex;
    align-content: flex-start; 
    margin: 0 auto;
`



const LoginDialog = ({ open, onClose }) => {
    const [countryCode, setCountryCode] = React.useState('United States (+1)');
    const [phoneNumber, setPhoneNumber] = React.useState('');

    return (
        <StyledDialog open={open} onClose={onClose} fullWidth maxWidth="sm">
            <StyledDialogTitle>
                <StyledDialogActions>
                    <IconButton onClick={onClose} style={{ borderRadius: '50%' }} >
                        <CloseIcon />
                    </IconButton >
                </StyledDialogActions>
                Log in or sign up
            </StyledDialogTitle>

            <StyledDialogContent>
                <Typography variant="h6" gutterBottom>
                    Welcome to Airbnb
                </Typography>
                <TextField
                    select
                    label="Country code"
                    value={countryCode}
                    onChange={(e) => setCountryCode(e.target.value)}
                    SelectProps={{
                        native: true,
                    }}
                    fullWidth
                    margin="dense"
                >
                    <option value="United States (+1)">United States (+1)</option>
                    <option value="Canada (+1)">Canada (+1)</option>
                    <option value="Mexico (+52)">Mexico (+52)</option>
                    {/* Add more country codes as needed */}
                </TextField>
                <TextField
                    label="Phone number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    fullWidth
                    margin="dense"
                />
                <Typography variant="body2" color="textSecondary" gutterBottom>
                    We’ll call or text you to confirm your number. Standard message and data rates apply. Privacy Policy
                </Typography>
                <StyledButtonContinue variant="contained" fullWidth>
                    Continue
                </StyledButtonContinue>
                <Divider style={{ margin: '20px 0' }}>or</Divider>
                <StyledSocialMedia variant="outlined" fullWidth>
                    <FacebookIcon />
                    <StyledSocialMediaDiv>
                        <p>Continue with Facebook</p>
                    </StyledSocialMediaDiv>
                </StyledSocialMedia>
                <StyledSocialMedia variant="outlined" fullWidth>
                    <GoogleIcon />
                    <StyledSocialMediaDiv>
                        <p>Continue with Google</p>
                    </StyledSocialMediaDiv>
                </StyledSocialMedia>
                <StyledSocialMedia variant="outlined" fullWidth className="apple">
                    <AppleIcon />
                    <StyledSocialMediaDiv>
                        <p>Continue with Apple</p>
                    </StyledSocialMediaDiv>
                </StyledSocialMedia>
                <StyledSocialMedia variant="outlined" fullWidth>
                    <EmailIcon />
                    <StyledSocialMediaDiv>
                        <p>Continue with email</p>
                    </StyledSocialMediaDiv>
                </StyledSocialMedia>
            </StyledDialogContent>
        </StyledDialog>
    );
};
export default LoginDialog