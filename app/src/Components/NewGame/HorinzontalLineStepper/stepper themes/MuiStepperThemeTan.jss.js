import {createMuiTheme} from "@material-ui/core";

export const muiStepperThemeTan = createMuiTheme({
    overrides: {
        MuiStepper: {
            root: {
                backgroundColor: 'rgba(0, 0, 0, 0)',
            },
        },
        MuiStepIcon: {
            root: {
                color: '#d7bb99',
                '&$completed': {
                    color: '#FFC0CB',
                },
                '&$active': {
                    color: '#90caf9',
                },
            },
            active: {},
            completed: {},
        },
    },
    palette: {
        type: 'dark',
        primary: {
            main: '#d7bb99',
            contrastText: '#111111',
        }
    },
})