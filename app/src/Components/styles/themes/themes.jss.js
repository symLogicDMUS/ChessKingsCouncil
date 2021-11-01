import React from "react";
import { light } from "./light.jss";
import { NBA } from "./NBA.jss";
import { tan } from "./tan.jss";
import { dark } from "./dark.jss";
import { blue } from "./blue.jss";
import { star_wars } from "./star_wars.jss";
import { mechwarrior_theme } from "./mechwarrior_theme.jss";

/**values repeated when theme only differs by color of pieces*/
export const themes = {
    dark: dark,
    light: light,
    tan: tan,
    blue: blue,
    tan_dark: {
        ...tan,
        title: "#d7bb99",
        text_alt3: "#d7bb99",
        outline_alt: "#d7bb99",
        page_link: "#d7bb99",
        page_link_hover: "#90caf9",
        light_normal: "#f0d9b5",
        dark_normal: "#d0bd99",
        site_description_text: "#d7bb99",
    },
    red_blue: dark,
    dark_alt: dark,
    red_blue_alt: dark,
    classic_dark: dark,
    star_wars: star_wars,
    mechwarrior_a_team: mechwarrior_theme,
    mechwarrior_b_team: mechwarrior_theme,
    NBA: NBA,
};
