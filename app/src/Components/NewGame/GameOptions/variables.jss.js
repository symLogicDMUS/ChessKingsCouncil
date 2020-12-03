import {availWidth} from "../../helpers/windowMeasurments";
import {getTextWidth} from "../../helpers/getTextWidth";

export const margin = availWidth() * 0.04;
export const sectionWidth = window.screen.availWidth * 0.333;
export const gameOptionsWidth = (fontSize) => getTextWidth('Game Name', fontSize, 'Garamond')+margin