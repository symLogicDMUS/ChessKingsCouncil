import {winHeight, winWidth} from "../../helpers/windowMeasurments";

export const displayBoardModal = {
    width : winWidth() * 0.208,
    height : winHeight() * 0.504,
    left : winWidth() * 0.5 - winWidth() * 0.208 * 0.5,
    top : winHeight() * 0.5 - winHeight() * 0.504 * 0.5,
}