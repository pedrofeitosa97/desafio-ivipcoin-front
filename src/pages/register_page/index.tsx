import { useState } from "react";
import { Form, StyledTypography, StyledTextField, StyledButton } from "../login_page/styled";
import { Navigate, useNavigate } from "react-router-dom";
import { useRequests } from "../../hooks/request.hooks";

interface RegisterFormValues {
    name: string;
    email: string;
    password: string;
    photoURL: string
}

export default function RegisterForm() {
    const navigate = useNavigate();
    const { registerUserRequest } = useRequests()
    const [formValues, setFormValues] = useState<RegisterFormValues>({
        name: "",
        email: "",
        password: "",
        photoURL: "",
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
        handleRegister(formValues)
      };

      const handleRegister = (data: any) => {
        try {
          registerUserRequest(data)
          console.log('registrou')
        } catch (error) {
          console.log(error)
        }
      }

  return (
    <>
    <Form onSubmit={handleSubmit}>
      <StyledTypography variant="h5">Registre-se</StyledTypography>
      <StyledTextField
        variant="filled"
        className="text-field-name"
        type="name"
        name="name"
        label="Nome"
        value={formValues.name}
        onChange={handleChange}
      />
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
        label="Senha"
        value={formValues.password}
        onChange={handleChange}
      />
    <StyledTextField
        variant="filled"
        className="text-field-photo"
        type="photoURL"
        name="photoURL"
        label="Avatar URL"
        value={formValues.photoURL}
        onChange={handleChange}
      />
      <StyledButton color="primary" variant="contained" type="submit">
        Registrar-se
      </StyledButton>
      <StyledTypography variant="h6" onClick={() => navigate('/')}>Voltar</StyledTypography>
    </Form>
  </>
  )
}
