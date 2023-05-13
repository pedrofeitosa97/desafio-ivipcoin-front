import { useState } from "react";
import { TextField, Button, Typography } from "@mui/material";
import { Form, StyledTypography, StyledTextField, StyledBackground } from "./styled";
import { useNavigate } from "react-router-dom";
import { useRequests } from "../../hooks/request.hooks";
import { ToastContainer, toast } from 'react-toastify';

interface LoginFormValues {
  email: string;
  password: string;
}

const LoginForm: React.FC = () => {
  const navigate = useNavigate();
  const { loginUserRequest } = useRequests()

  const [formValues, setFormValues] = useState<LoginFormValues>({
    email: "",
    password: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Submitted values:", formValues);
    handleLogin(formValues)
  };

  const handleLogin = async (data: any) =>{
    try {
      await loginUserRequest(data)
      navigate('/home')
      toast.success('Login feito com sucesso.',{
        position: 'bottom-right'
      })
    } catch (error) {
      toast.error('Email ou senha inválido.',{
        position: 'bottom-right'
      })
    }
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <StyledTypography variant="h5">Faça seu login</StyledTypography>
        <StyledTextField
          variant="filled"
          className="text-field-email"
          type="email"
          name="email"
          label="Email"
          value={formValues.email}
          onChange={handleChange}
        />
        <StyledTextField
          variant="filled"
          className="text-field-password"
          type="password"
          name="password"
          label="Password"
          value={formValues.password}
          onChange={handleChange}
        />
        <Button color="primary" variant="contained" type="submit">
          Login
        </Button>
        <span className="register-link" onClick={() => navigate('/register')}>
          Não possui conta? Registre-se
        </span>
      </Form>
      <ToastContainer />
    </>
  );
};

export default LoginForm;
