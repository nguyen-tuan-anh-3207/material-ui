import {createMuiTheme} from '@material-ui/core/styles';

const theme = createMuiTheme({
    color: {
        primary:'#D32F2F',
        secondary: '#03A9F4',
        error: '#FBC02D',
        textColor: '#fff',
    },
    typography: {
        fontFamily: 'Roboto',

    },
    shape: {
        borderRadius: 4,
        backgroundColor: '#00796B',
        textColor: '#FFF',
        border: '#ccc',
    }
});

export default theme;