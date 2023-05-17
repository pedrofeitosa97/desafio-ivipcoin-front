import * as yup from 'yup';

const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email('Email inválido')
    .required('O campo de email é obrigatório'),
  password: yup.string().required('O campo de senha é obrigatório'),
});

const registerSchema = yup.object().shape({
  name: yup.string().required('Nome de usuário é obrigatório.'),
  email: yup
    .string()
    .email('Email inválido')
    .required('Informe um email válido.'),
  password: yup.string().required('Uma senha é obrigatória.'),
  photoURL: yup.string().url().required('Por favor, informe uma URL válida.'),
});

export { loginSchema, registerSchema };
