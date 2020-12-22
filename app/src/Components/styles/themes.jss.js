export const themes = {
    dark: {
        outline: '#2b2b2b',
        fill: '#3f3f3f',
        text: '#a9a9a9',
        button_fill: '#414141',
        button_text: '#a9a9a9',
        button_hover_fill: '#a9a9a9',
        button_hover_text: '#515151',
        modal_fill: '#414141',
        even_row: '#414141',
        odd_row: '#474747',
        text_alt: '#707070',
        text_alt2: '#252525',
    },
    green: {
        outline: '#b1faae',
        fill: '#008000',
        text: '#b1faae',
        button_fill: '#008000',
        button_text: '#b1faae',
        button_hover_fill: '#b1faae',
        button_hover_text: '#008000',
        modal_fill: '#008000',
        even_row: '#29b157',
        odd_row: '#b1faae',
    },
    purple: {
        outline: '#6a5acd',
        fill: '#6a5acd',
        text: '#6a5acd',
        button_fill: '#ffffff',
        button_text: '#6a5acd',
        button_hover_fill: '#6a5acd',
        button_hover_text: '#ffffff',
        modal_fill: '#ffffff',
        even_row: '#6a5acd',
        odd_row: '#748cd2'
    },
    black: {
        outline: '#000000',
        fill: '#000000',
        text: '#1b1b1b',
        button_fill: '#1b1b1b',
        button_text: '#d7bb99',
        button_hover_fill: '#ffffff',
        button_hover_text: '#1b1b1b',
        modal_fill: '#2d2d2d',
        even_row: '#1b1b1b',
        odd_row: '#3d3d3d',
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