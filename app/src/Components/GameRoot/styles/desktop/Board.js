var boardSizePos = {
    width: window.screen.availHeight * 0.8,
    height: window.screen.availHeight * 0.8,
    left: window.screen.availHeight * 0.37,
    top: window.screen.availHeight * 0.125,
};
export var interactive_board = {
    position: "absolute",
    zIndex: "2",
    ...boardSizePos,
    lineHeight: "0",
};
export var ai_board = {
    position: "absolute",
    zIndex: "1",
    ...boardSizePos,
    lineHeight: "0",
};
export var display_board = {
    position: "absolute",
    zIndex: "0",
    ...boardSizePos,
    lineHeight: "0",
    boxShadow: "0px 0px 25px hover-off",
};
