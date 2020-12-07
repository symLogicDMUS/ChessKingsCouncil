import {availHeight, availWidth} from "../helpers/windowMeasurments";
import {getTextWidth} from "../helpers/getTextWidth.jss";
import {lineHeight} from "../styles/lineHeight.jss";

let fontFamily = 'Garamond';
const titleTop = () => availHeight() * 0.34;
const titleFontSize = () => availHeight() * 0.18
const titleWidth = () => getTextWidth('Load Game', titleFontSize(), fontFamily)
const titleLeft = () => availWidth() * 0.5 - getTextWidth('Load Game', titleFontSize(), fontFamily) * 0.5;
const buttonsMargin = () => titleFontSize() * 0.15;

const dropdownTop = () => titleTop() + titleFontSize() * lineHeight(titleFontSize()) + buttonsMargin()
const dropdownWidth = () => titleWidth()*0.99
const dropdownLeft = () => titleLeft()
const dropdownHeight = () => '3em'

const buttonTop = () => dropdownTop() + buttonsMargin()*3
const buttonWidth = () => titleWidth() * 0.495 - buttonsMargin() * 0.5

const button = {
    position: 'absolute',
    top: buttonTop(),
    width: buttonWidth(),
    height: titleFontSize() * 0.2,
}
export const play_button  = {
    ...button,
    left: titleLeft(),
}

export const delete_button = {
    ...button,
    left: titleLeft() + buttonWidth() + buttonsMargin(),
}

export const dropdown = {
    position: "absolute",
    top: dropdownTop(),
    left: dropdownLeft(),
    width: dropdownWidth(),
    height: dropdownHeight(),
}

export const styles = {
    title: {
        margin: 0,
        position: "absolute",
        cursor: "pointer",
        fontFamily: fontFamily,
        lineHeight: '70%',
        "@media screen and (min-device-width: 768px)": {
            fontSize: titleFontSize(),
            top: titleTop(),
            left: titleLeft()
        },
    },
};
