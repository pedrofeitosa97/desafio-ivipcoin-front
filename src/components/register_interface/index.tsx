import { useState } from "react";
import { TextField, Button, Typography } from "@mui/material";
import { Form, StyledTypography, StyledTextField, StyledButton } from "../login_interface/styled";

interface RegisterFormValues {
    name: string;
    email: string;
    password: string;
    photoURL: string
}

export default function RegisterForm() {

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
      };

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
    </Form>
  </>
  )
}
