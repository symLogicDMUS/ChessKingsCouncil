import {navBarHeight} from "../../NavBar/NavBarStyle";
import {getTextWidth} from "../../helpers/getTextWidth";
import {margin} from "./variables.jss";
import {availHeight, availWidth} from "../../helpers/windowMeasurments";

export const title = (fontSize, text) => ({
    position: "absolute",
    fontSize: fontSize,
    fontFamily: "Garamond",
    lineHeight: 0.65,
    width: getTextWidth(text, fontSize, "Garamond"),
    left: availWidth()*0.5 - getTextWidth(text, fontSize, 'Garamond')*0.5,
})

export const gameType = (fontSize) => ({
    position: "absolute",
    fontSize: fontSize,
    width: '0.7em',
    height: '0.7em',
    top: navBarHeight + margin*2 + fontSize*2
})