import React from "react";
import {NBA} from "./NBA.jss";
import {tan} from "./tan.jss";
import {dark} from "./dark.jss";
import {star_wars} from "./star_wars.jss";
import {mechwarrior_theme} from "./mechwarrior_theme";

export const themes = {
    dark: dark,
    tan: tan,
    red_blue: dark,
    star_wars: star_wars,
    mechwarrior_a_team: mechwarrior_theme,
    mechwarrior_b_team: mechwarrior_theme,
    NBA: NBA,
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