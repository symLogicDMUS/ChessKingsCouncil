import {availWidth} from "../../helpers/windowMeasurments";
import {getTextWidth} from "../../helpers/getTextWidth.jss";
import {buttonMargin, size} from "./PickType.jss";

export const gameOptionsMargin = availWidth() * 0.04;
export const sectionWidth = window.screen.availWidth * 0.333;
export const gameOptionsWidth = (fontSize) => getTextWidth('Game Name', fontSize, 'Garamond') + gameOptionsMargin
export const getInputsWidth = (fontSize) => size(fontSize) * 3 + buttonMargin(fontSize) * 2;