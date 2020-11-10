import {getButtonSize} from "../../styles/button/button-size";

export var stylesObjects = {
    desktop: {
        Modal: () => {
            return {
                width: window.screen.availWidth * 0.389,
                height: window.screen.availHeight * 0.4,
                left: window.screen.availWidth * 0.5 - window.screen.availWidth * 0.389 * 0.5,
                top: window.screen.availHeight * 0.5 - window.screen.availHeight * 0.4 * 0.5,
                borderRadius: window.screen.availHeight * 0.025,
            };
        },
        OkButton: (modalWindow) => {
            var buttonSize = getButtonSize(modalWindow.height * 0.08);
            var left = modalWindow.width * 0.5 - buttonSize.width * 0.5;
            var top = modalWindow.height * 0.8;
            return {
                ...buttonSize,
                top: top,
                left: left,
            };
        },
        YesNoButton: (modalWindow) => {
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
    },
    mobile: {
        Modal: () => {
            return {
                width: window.screen.availWidth,
                height: window.screen.availHeight * 0.4,
                left: 0,
                top: window.screen.availHeight * 0.5 - window.screen.availHeight * 0.4 * 0.5,
                borderRadius: window.screen.availHeight * 0.025,
            };
        },
        OkButton: (modalWindow) => {
            var buttonSize = getButtonSize(modalWindow.height * 0.08);
            var left = modalWindow.width * 0.5 - buttonSize.width * 0.5;
            var top = modalWindow.height * 0.8;
            return {
                ...buttonSize,
                top: top,
                left: left,
            };
        },
        YesNoButton: (modalWindow) => {
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
    },
};
