import {createMuiTheme} from "@material-ui/core";
import {darken} from "@material-ui/core/styles";

export const muiStepperThemeLight = createMuiTheme({
    overrides: {
        MuiStepIcon: {
            root: {
                '&$completed': {
                    color: '#f50057',
                    // color: darken('#253b73', 0.4),
                },
            },
            completed: {},
        },
    },
    palette: {
        type: 'light'
    },
})