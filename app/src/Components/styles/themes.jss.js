import {createMuiTheme, makeStyles} from "@material-ui/core/styles";
import {orange} from "@material-ui/core/colors";

export const themesJss = {
    dark: {
        outline: '#707070',
        checkmark: '#a9a9a9',
        font: '#a9a9a9',
        fill: '#515151',
    },
    light: {
        outline: '#b1faae',
        checkmark: '#b1faae',
        font: '#b1faae',
        fill: 'green',
    }

};

export const themesMui = {
    dark: createMuiTheme({
        outline: '#707070',
        checkmark: '#a9a9a9',
        font: '#a9a9a9',
        fill: '#515151',
    }),
    light: createMuiTheme({
        outline: '#b1faae',
        checkmark: '#b1faae',
        font: '#b1faae',
        fill: 'green',
    })
};
