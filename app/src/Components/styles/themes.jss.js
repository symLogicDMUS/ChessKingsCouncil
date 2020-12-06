export const themes = {
    dark: {
        outline: '#707070',
        fill: '#515151',
        checkmark: '#a9a9a9',
        text: '#a9a9a9',
        button_fill: '#515151',
        button_text: '#a9a9a9',
        button_hover_fill: '#a9a9a9',
        button_hover_text: '#515151',
    },
    light: {
        outline: '#b1faae',
        fill: 'green',
        checkmark: '#b1faae',
        font: '#b1faae',
        button_fill: '#008000',
        button_text: '#b1faae',
        button_hover_fill: '#b1faae',
        button_hover_text: '#008000',
    },
    light2: {
        outline: '#6a5acd',
        fill: '#6a5acd',
        checkmark: '#ffffff',
        text: '#6a5acd',
        button_fill: '#ffffff',
        button_text: '#6a5acd',
        button_hover_fill: '#6a5acd',
        button_hover_text: '#ffffff',
        button_disabled_fill: '#ffffff',
        button_disabled_text: '#6a5acd'
    },
    black: {
        outline: '#000000',
        fill: '#000000',
        checkmark: '#000000',
        font: '#ffffff',
        button_fill: '#000000',
        button_text: '#ffffff',
        button_hover_fill: '#ffffff',
        button_hover_text: '#000000',
    },
    /**
     * given so that can override styles elsewhere and don't need to worry about errors of the form:
     * 'cannot read property foo of undefined'
     */
    none: {
        outline: null,
        fill: null,
        checkmark: null,
        font: null,
        button_fill: null,
        button_text: null,
        button_hover_fill: null,
        button_hover_text: null,
    }
};