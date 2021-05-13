import React from "react";
import {NBA} from "./NBA.jss";
import {tan} from "./tan.jss";
import {dark} from "./dark.jss";
import {star_wars} from "./star_wars.jss";
import {mechwarrior_theme} from "./mechwarrior_theme.jss";

/**values repeated when theme only differs by color of pieces*/
export const themes = {
    dark: dark,
    tan: tan,
    tan_dark: {
        ...tan,
        outline_alt: '#d7bb99',
        title: '#d7bb99',
    },
    red_blue: dark,
    dark_alt: dark,
    classic_dark: dark,
    star_wars: star_wars,
    mechwarrior_a_team: mechwarrior_theme,
    mechwarrior_b_team: mechwarrior_theme,
    NBA: NBA,
};