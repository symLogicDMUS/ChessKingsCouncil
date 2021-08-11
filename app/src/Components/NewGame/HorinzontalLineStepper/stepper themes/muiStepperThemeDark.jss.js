import {createMuiTheme} from "@material-ui/core";

export const muiStepperThemeDark = createMuiTheme({
    overrides: {
        MuiStepper: {
            root: {
                backgroundColor: '#313131',
            },
        },
        MuiStepIcon: {
            root: {
                '&$completed': {
                    color: '#90caf9',
                },
                '&$active': {
                    color: '#f50057',
                },
            },
            active: {},
            completed: {},
        },
    },
    palette: {
        type: 'dark',
    },
})