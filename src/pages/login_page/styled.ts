import styled from 'styled-components'
import { Typography } from '@mui/material'
import { TextField, Button } from '@mui/material';

export const StyledTextField = styled(TextField)`
  color: #f5f5f5;
`;

export const StyledBackground = styled.div`
  background-color: #09090A;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  z-index: -1;
  position: fixed;
`

export const Form = styled.form`
display: flex;
flex-direction: column;
gap: 28px;
width: 80%;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
justify-content: center;
padding: 40px;
border-radius: 8px;
background: #29292E;
border: 1px solid rgba(0,0,0,0.3);

.text-field-email,
.text-field-password {
    padding-block: 12px;
}

input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0px 1000px white inset;
}

.register-link {
    padding-top: 24px;
    cursor: pointer;
    font-weight: 600;
    color: #8553BF;
}

@media (min-width: 1024px) {
    width: 25%;
}
`

export const StyledTypography = styled(Typography)`
color: #8553BF;
padding-bottom: 16px;
cursor: pointer;

`

export const StyledButton = styled(Button)`
color: #8553BF;
`
