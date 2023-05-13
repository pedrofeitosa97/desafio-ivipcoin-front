import LoginForm from "./components/login_form";
import { ThemeProvider } from '@mui/material/styles';
import { StyledBackground } from "./components/login_form/styled";
import RegisterForm from "./components/register_form";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { theme } from "./theme/theme";

function App() {
  return (
    <BrowserRouter>
        <StyledBackground/>
        <ThemeProvider theme={theme}>
          <Routes>
          <Route path='' element={<LoginForm />} />
          <Route path='/register' element={<RegisterForm/>} />
          </Routes>
        </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
