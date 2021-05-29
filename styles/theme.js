import { createMuiTheme,fade} from '@material-ui/core/styles';
import { colorPallete } from './pallete';

let theme =  createMuiTheme({
    typography: {
        fontFamily: '"Nunito Sans", "Open Sans",  "Helvetica", "Arial", sans-serif',
    },    
  palette: {
        primary: {
          light: '#00c853',
          main: colorPallete.hurra_red_light,
          // dark: will be calculated from palette.secondary.main,
          contrastText: '#ffffff',
        },
        secondary: {
            light: '#ffffff',
            main: '#ffffff',
            // dark: will be calculated from palette.secondary.main,
            contrastText: '#333333',
        },
        custom: { ...colorPallete }
    },
});

export default theme;