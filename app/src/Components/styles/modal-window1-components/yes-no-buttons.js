import {getButtonSize} from "../button/button-size";

export function getYesNoButtonStyle(modalWindow) {
    const buttonSize = getButtonSize(modalWindow.height * 0.065)
    const yesPosX = modalWindow.width * 0.5 - (buttonSize.width * 2 + buttonSize.width*0.2) * 0.5;
    const noPosX = yesPosX + buttonSize.width + buttonSize.width*0.2;
    const top = modalWindow.height * 0.85;
    return {
        yes: {
            ...buttonSize,
            left: yesPosX,
            top: top
        },
        no: {
            ...buttonSize,
            left: noPosX,
            top: top
        }
    }
}