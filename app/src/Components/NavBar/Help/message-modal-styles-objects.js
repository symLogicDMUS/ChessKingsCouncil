export var stylesObjects = {
    desktop: {
        Modal: () => {
            return {
                width: window.screen.availWidth * 0.389,
                height: window.screen.availHeight * 0.4,
                left: window.screen.availWidth * 0.5 - (window.screen.availWidth * 0.389 * 0.5),
                top: window.screen.availHeight * 0.5 - (window.screen.availHeight * 0.4 * 0.5),
                borderRadius:  window.screen.availHeight * 0.025
            };
        },
    },
    mobile: {
        Modal: () => {
            return {
                width: window.screen.availWidth,
                height: window.screen.availHeight * 0.4,
                left: 0,
                top: window.screen.availHeight * 0.5 - (window.screen.availHeight * 0.4 * 0.5),
                borderRadius:  window.screen.availHeight * 0.025
            };
        },
    }

};
