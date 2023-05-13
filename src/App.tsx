import LoginForm from "./components/login_interface";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { StyledBackground } from "./components/login_interface/styled";
import RegisterForm from "./components/register_interface";

const theme = createTheme({
  components: {
    MuiInputBase: {
      defaultProps: {
        inputProps: {
          style: { color: '#fff' }
        }
      }
    },
    MuiInputLabel: {
      defaultProps: {
        style: { color: '#fff' }
      }
    }
  },
  palette: {
    primary: {
      main: '#7B53A8',
    },
  },
});

function App() {
  
  return (
    <ThemeProvider theme={theme}>
      <StyledBackground/>
      {/* <LoginForm/> */}
      <RegisterForm/>
    </ThemeProvider>
  );
}

export default App;
