import {getButtonSize} from "../button/button-size";

export function getOkButtonStyle(modalWindow) {
    var buttonSize = getButtonSize(modalWindow.height * 0.08);
    var left = modalWindow.width * 0.5 - buttonSize.width * 0.5;
    var top = modalWindow.height * 0.8;
    return {
        ...buttonSize,
        top: top,
        left: left,
    };
}
