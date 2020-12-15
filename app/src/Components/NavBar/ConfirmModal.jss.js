import makeStyles from "@material-ui/core/styles/makeStyles";
import {availHeight, availWidth} from "../helpers/windowMeasurments";
import {themes} from "../styles/themes.jss";

const modalHeight = () => availHeight() * 0.3333;
const modalWidth = () => availWidth() * 0.3333;
const buttonWidth = () => modalWidth() * 0.16;
const buttonHeight = () => buttonWidth() * 0.3333;
const modalMargin = () => modalWidth() * 0.05;
const getFontSize = () => modalHeight() * 0.05;
const titleHeight = () => getFontSize() * 1.5;
const paragraphHeight = () => modalHeight() - (buttonHeight() + titleHeight() + modalMargin() * 4);
const buttonTop = () => titleHeight() + paragraphHeight() + modalMargin() * 3.1;
const titleTop = () => modalMargin();

const button = {
    position: 'absolute',
    zIndex: 'inherit',
    color: '#a9a9a9',
    backgroundColor: '#333333',
    width: buttonWidth(),
    height: buttonHeight(),
    top: buttonTop(),
}

export const yes_button = {
    ...button,
    left: modalWidth() * 0.5 - (buttonWidth() + modalMargin()*0.5) ,
}

export const no_button = {
    ...button,
    left: modalWidth() * 0.5 + modalMargin()*0.5,
}

function closeIconMargin() {
    return modalMargin() * 0.2;
}

export const close = {
    position: 'absolute',
    top: closeIconMargin(),
    left: modalWidth()-modalMargin(),
}

export const text = {
    position:'absolute',
    zIndex: 'inherit',
    width: modalWidth() - modalMargin()*2,
    left: modalMargin(),
    fontFamily: '\'Segoe UI\', Tahoma, Geneva, Verdana, sans-serif',
    fontSize: getFontSize(),
}



export const useStyles = makeStyles({
    window: props => ({
        position: 'absolute',
        width: modalWidth(),
        height: modalHeight(),
        top: availHeight()*0.5 - modalHeight()*0.5,
        left: availWidth()*0.5 - modalWidth()*0.5,
        backgroundColor: themes[props.theme].modal_fill,
        borderRadius: '0.8em',
    }),
    title: props => ({
        ...text,
        color: themes[props.theme].text,
        top: titleTop(),
        height: titleHeight(),
    }),
    paragraph: {
        ...text,
        height: paragraphHeight(),
        top: titleTop() + titleHeight() + modalMargin(),
        overflowY: 'hidden',
    },
});