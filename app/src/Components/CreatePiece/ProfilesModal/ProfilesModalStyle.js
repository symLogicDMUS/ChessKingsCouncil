export var styleObjects = {
    desktop: {
        topBar: () => {
            return {
                width: window.screen.availWidth,
                height: window.screen.availHeight * 0.1,
                top: 0,
                left: 0,
            };
        },
        title: () => {
            return {
                height: window.screen.availHeight * 0.09,
                width: window.screen.availWidth * 0.25,
                fontSize: window.screen.availHeight * 0.035,
            };
        },
    },
    mobile: {
        topBar: () => {},
        title: () => {},
    },
};
