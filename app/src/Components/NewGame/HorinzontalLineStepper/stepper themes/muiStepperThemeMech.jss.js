import { createMuiTheme } from "@material-ui/core";

export const muiStepperThemeMech = createMuiTheme({
    overrides: {
        MuiStepper: {
            root: {
                backgroundColor: "rgba(0, 0, 0, 0)",
            },
        },
        MuiStepIcon: {
            root: {
                "&$completed": {
                    color: "pink",
                },
                "&$active": {
                    color: "red",
                },
            },
            active: {},
            completed: {},
        },
    },
    palette: {
        type: "dark",
    },
});
