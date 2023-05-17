import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  components: {
    MuiInputBase: {
      defaultProps: {
        inputProps: {
          style: { color: '#fff' },
        },
      },
    },
    MuiInputLabel: {
      defaultProps: {
        style: { color: '#fff' },
      },
    },
  },
  palette: {
    primary: {
      main: '#7B53A8',
    },
    secondary: {
      main: 'rgba(166, 120, 255, 0.8)',
    },
  },
});
