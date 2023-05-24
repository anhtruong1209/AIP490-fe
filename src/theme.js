import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';
  
// Create a theme instance.
const theme = createTheme({
    palette: {
        primary: {
            main: '#1dd3f8',
        },
        secondary: {
            main: '#19857b',
        },
        error: {
            main: red.A400,
        },
        male : {
            main:"#4287f5"
        },
        female: {
            main: "#f765a5"
        }
    },
});
  
export default theme;