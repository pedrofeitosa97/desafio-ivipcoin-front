import LoginForm from "./pages/login_page";
import { ThemeProvider } from '@mui/material/styles';
import { StyledBackground } from "./pages/login_page/styled";
import RegisterForm from "./pages/register_page";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { theme } from "./theme/theme";
import { ToastContainer } from "react-toastify";
import Home from "./pages/home_page";

function App() {
  return (
    <BrowserRouter>
        <StyledBackground/>
        <ToastContainer />
        <ThemeProvider theme={theme}>
          <Routes>
            <Route path='' element={<LoginForm />} />
            <Route path='/register' element={<RegisterForm/>} />
            <Route path='/home' element={<Home/>} />
          </Routes>
        </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
