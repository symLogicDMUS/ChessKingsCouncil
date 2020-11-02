var modalWidth = window.screen.availWidth * 0.389;
var modalHeight = window.screen.availHeight * 0.400;
var modalLeft = window.screen.availWidth * 0.5 -  modalWidth * 0.5;
var modaltTop = window.screen.availHeight * 0.5 - modalHeight * 0.5
var modalBorderRadius = window.screen.availHeight * 0.02;

export var  modalWindow = {
    left: modalLeft,
    top: modaltTop,
    width: modalWidth,
    height: modalHeight,
    borderRadius: modalBorderRadius,
}