import {createMuiTheme} from "@material-ui/core";

export const muiStepperThemeStarWars = createMuiTheme({
    overrides: {
        MuiStepper: {
            root: {
                backgroundColor: 'rgba(0, 0, 0, 0)',
            },
        },
        MuiStepIcon: {
            root: {
                '&$completed': {
                    color: '#28ded3',
                },
                '&$active': {
                    color: '#f6b601',
                },
            },
            active: {},
            completed: {},
        },
        MuiStepLabel: {
            root: {
                '&$completed': {
                    color: '#28ded3',
                },
                '&$active': {
                    color: '#f6b601',
                },
            },
            active: {},
            completed: {},
        }
    },
    palette: {
        type: 'dark',
        primary: {
            contrastText: '#000',
            main: '#f6b601',
            light: '#f6b601',
            dark: '#f6b601',
        }
    },
})