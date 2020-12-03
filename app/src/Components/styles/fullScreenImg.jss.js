import {availHeight, availWidth} from "../helpers/windowMeasurments";

export const fullScreenImg = {
    position: 'absolute',
    zIndex: -5,
    left: 0,
    top: 0,
    width: availWidth(),
    height: availHeight(),
}