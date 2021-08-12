import { muiStepperThemeTan } from "./MuiStepperThemeTan.jss";
import { muiStepperThemeMech } from "./muiStepperThemeMech.jss";
import { muiStepperThemeDark } from "./muiStepperThemeDark.jss";
import { muiStepperThemeLight } from "./muiStepperThemeLight.jss";
import { muiStepperThemeStarWars } from "./muiStepperThemeStarWars.jss";

const lights = ["blue", "NBA"];
const tans = ["tan", "tan_dark"];
const mechs = ["mechwarrior_a_team", "mechwarrior_b_team"];
const darks = ["dark", "dark_alt", "classic_dark", "red_blue", "red_blue_alt"];

export const getStepperTheme = (theme) => {
    if (darks.includes(theme)) return muiStepperThemeDark;
    if (lights.includes(theme)) return muiStepperThemeLight;
    if (tans.includes(theme)) return muiStepperThemeTan;
    if (mechs.includes(theme)) return muiStepperThemeMech;
    if (theme === "star_wars") return muiStepperThemeStarWars;
    return null;
};
