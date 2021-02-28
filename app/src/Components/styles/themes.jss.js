import React from "react";
import MenuItem from "@material-ui/core/MenuItem";

export const themes = {
    dark: {
        outline: '#2b2b2b',
        fill: '#3f3f3f',
        text: '#a9a9a9',
        text_alt: '#707070',
        text_alt2: '#252525',
        text_alt3: '#aaaaaa',
        nav_text: '#a9a9a9',
        button_fill: '#414141',
        button_text: '#a9a9a9',
        button_hover_fill: '',
        button_hover_text: '#a9a9a9',
        location_button_selected: '#4b6eaf',
        modal_fill: '#3f3f3f',
        img_border: '#2b2b2b',
        even_row: '#414141',
        odd_row: '#474747',
        span: '#ec2525',
        span_alt: '#c60116',
        offset: '#a70000',
        light_normal: '#f0f0ff',
        dark_normal: '#a9a9b8',
        light_in_range: '#0081cb',
        dark_in_range: '#0081cb',
        sqr_text_light: '#a9a9a9',
        sqr_text_dark: '#ffffff',
        sqr_border: '#00CCff',
        sqr_hover: '#00ccff',
        page_link: '#a9a9a9',
        page_link_hover: '#ffffff',
        input_label: '#a9a9a9',
        input_outline: '#2b2b2b',
        variant_fill_r0: 157,
        variant_fill_g0: 80,
        variant_fill_b0: 226,
        variant_stroke_r0: 0,
        variant_stroke_g0: 0,
        variant_stroke_b0: 255,
        variant_fill_r1: 236,
        variant_fill_g1: 37,
        variant_fill_b1: 37,
        variant_stroke_r1: 157,
        variant_stroke_g1: 80,
        variant_stroke_b1: 120,
    },
    tan: {
        outline: '#2b2b2b',
        fill: '#000000',
        text: '#d7bb99',
        text_alt: '#edc9a2ff',
        text_alt2: '#d7bb99',
        text_alt3: '#111111',
        nav_text: '#d7be9b',
        button_fill: '#1b1b1b',
        button_text: '#d7bb99',
        button_hover_fill: '#ffffff',
        button_hover_text: '#1b1b1b',
        location_button_selected: '#4b6eaf',
        modal_fill: '#111111',
        img_border: '#d7bb99',
        even_row: '#1b1b1b',
        odd_row: '#252525',
        span: '#c60116',
        offset: '#990606',
        light_normal: '#f0d9b5',
        dark_normal: '#b19f83',
        light_in_range: '#fff172',
        dark_in_range: '#acaf4b',
        sqr_hover: '#60a8f0',
        input_label: '#d7bb99',
        input_outline: '#2b2b2b',
        page_link: '#000000',
        page_link_hover: '#ffffff',
    },
    star_wars: {
        outline: '#2b2b2b',
        fill: '#000000',
        text: '#f6b601',
        text_alt: '#ffe81e',
        text_alt2: 'goldenrod',
        text_alt3: '#fcbb04',
        nav_text: 'gold',
        button_fill: '#1b1b1b',
        button_text: '#f6b601',
        button_hover_fill: '#2b2b2b',
        button_hover_text: '#28ded3',
        location_button_selected: '#4b6eaf',
        modal_fill: '#111111',
        img_border: '#f6b601',
        even_row: '#1b1b1b',
        odd_row: '#252525',
        span: '#c60116',
        offset: '#990606',
        light_normal: '#ffe81e',
        dark_normal: 'rgba(0, 0, 0, 0)',
        light_in_range: '#fff172',
        dark_in_range: 'rgba(255, 255, 255, 0.4)',
        sqr_hover: '#60a8f0',
        input_label: '#f6b601',
        input_outline: '#f6b601',
        page_link: '#ffe81e',
        page_link_hover: '#60a8f0',
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

export const themeList = [
    'dark',
    'tan',
]

export const specialThemeList = [
    'star_wars'
]

export const themesMenuItemList = [
    <MenuItem value="dark">dark</MenuItem>,
    <MenuItem value="tan">tan</MenuItem>,
];

export const specialThemeMenuItemList = [
    <MenuItem value="star_wars">star wars</MenuItem>,
]