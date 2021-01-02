export const themes = {
    dark: {
        outline: '#2b2b2b',
        fill: '#3f3f3f',
        text: '#a9a9a9',
        button_fill: '#414141',
        button_text: '#a9a9a9',
        button_hover_fill: '#a9a9a9',
        button_hover_text: '#2b2b2b',
        modal_fill: '#414141',
        even_row: '#414141',
        odd_row: '#474747',
        text_alt: '#707070',
        text_alt2: '#252525',
        span: '#ec2525',
        offset: '#a70000',
        light_normal: '#ffffff',
        dark_normal: '#a9a9a9',
        light_in_range: '#72e2ff',
        dark_in_range: '#00CCFF',
        sqr_hover: '#00CCFF',
        page_link: '#a9a9a9',
        page_link_hover: '#ffffff',
        outline_label: '#a9a9a9',
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
        span: '#32ec25',
        offset: '#098b00',
        light_normal: '#ffffff',
        dark_normal: '#008000',
        dark_in_range: '#fdfd35',
        light_in_range: '#ddff00',
        sqr_hover: '#b1faae',
        outline_label: '#b1faae',
        page_link: '#b1faae',
        page_link_hover: '#ffffff',
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
        odd_row: '#748cd2',
        span: '#a625ec',
        offset: '#66008b',
        light_normal: '#ffffff',
        dark_normal: '#6a5acd',
        light_in_range: '#c972ff',
        dark_in_range: '#914baf',
        sqr_hover: '#b746fc',
        outline_label: '#6a5acd',
        page_link: '#914baf',
        page_link_hover: '#ffffff',
    },
    black: {
        outline: '#000000',
        fill: '#000000',
        text: '#d7bb99',
        button_fill: '#1b1b1b',
        button_text: '#d7bb99',
        button_hover_fill: '#ffffff',
        button_hover_text: '#1b1b1b',
        modal_fill: '#2d2d2d',
        even_row: '#1b1b1b',
        odd_row: '#3d3d3d',
        text_alt: '#edc9a2ff',
        text_alt2: '#d7bb99',
        span: '#ecc125',
        offset: '#8b7800',
        light_normal: '#ffffff',
        dark_normal: '#d7bb99',
        light_in_range: '#fff172',
        dark_in_range: '#acaf4b',
        sqr_hover: 'goldenrod',
        outline_label: '#000000',
        page_link: '#000000',
        page_link_hover: '#ffffff',
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