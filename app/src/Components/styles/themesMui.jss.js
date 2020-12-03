import {createMuiTheme} from "@material-ui/core/styles";

export const themesMui = {
    dark: createMuiTheme({
        outline: '#707070',

        fill: '#515151',
        checkmark: '#a9a9a9',
        font: '#a9a9a9',

        hover: {
            outline: '#72e2ff',
            fill: '#515151',
            checkmark: '#b1faae',
            font: '#72e2ff',
        },
        focus: {
            outline: '#72e2ff',
            fill: '#515151',
            checkmark: '#b1faae',
            font: '#72e2ff',
        }
    }),
    light: createMuiTheme({

        outline: '#b1faae',
        fill: 'green',
        checkmark: '#b1faae',
        font: '#b1faae',

        hover: {
            outline: '#72e2ff',
            fill: 'green',
            checkmark: '#b1faae',
            font: '#72e2ff',
        },
        focus: {
            outline: '#72e2ff',
            fill: 'green',
            checkmark: '#b1faae',
            font: '#72e2ff',
        }
    }),
    black: createMuiTheme({
        outline: '#000000',

        fill: '#000000',
        checkmark: '#000000',
        font: '#000000',

        hover: {
            outline: '#000000',
            fill: '#000000',
            checkmark: '#000000',
            font: '#000000',
        },
        focus: {
            outline: '#000000',
            fill: '#000000',
            checkmark: '#000000',
            font: '#000000',
        },
    })
};