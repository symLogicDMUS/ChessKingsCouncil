import {toolWidth} from "../CreatePiece.jss";
import {availHeight} from "../../helpers/windowMeasurments";

/**
 * every top-level component gets its own calculations file
 */

/*
 * height/fontSize
 */
export const iconToolHeight = () => availHeight() * 0.18;
export const margin = () => iconToolHeight()*0.08;
export const heightMinusMargins = () => iconToolHeight() - margin()*5
export const iconButtonHeight = () => heightMinusMargins()*0.4
export const titleFontSize = () => heightMinusMargins()*0.12
export const subtitleFontSize = () => heightMinusMargins() * 0.15;

/*
 * width
 */
export const widthMinusMargins = () => toolWidth() - margin()*5;
export const iconWindowSize = () => iconButtonHeight()*1.96 + margin()
export const iconButtonWidth = () => (widthMinusMargins()-iconWindowSize()*2)/2

/*
 * displacement top
 */
export const iconToolTop = () => availHeight() * 0.288;
export const titleTop = () => margin()
export const colorTitleTop = () => titleTop() + titleFontSize() + margin()
export const uploadButtonTop = () => colorTitleTop() + subtitleFontSize()*0.5 + margin()
export const chooseButtonTop = () => uploadButtonTop() + iconButtonHeight() + margin()

/*
 * displacement left
 */
export const whiteLeft = () => margin();
export const whiteWindowLeft = () => margin()*2 + iconButtonWidth()
export const blackLeft = () => margin()*3 + iconButtonWidth() + iconWindowSize()
export const blackWindowLeft = () => margin()*4 + iconButtonWidth()*2 + iconWindowSize()

export const wl = '3em'
export const bl = '8em'
export const bh = '2.5em'
