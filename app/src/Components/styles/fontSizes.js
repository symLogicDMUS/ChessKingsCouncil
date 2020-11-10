export var fontSizes = {
    desktop: {
        medium1: () => {
            return window.screen.availHeight * 0.025;
        },
        medium2: () => {
            return window.screen.availHeight * 0.020;
        },
        medium3: () => {
            return window.screen.availHeight * 0.02;
        },
    },
    mobile: {
        medium1: () => {
            return window.screen.availHeight * 0.023;
        },
        medium2: () => {
            return window.screen.availHeight * 0.025;
        },
        medium3: () => {
            return window.screen.availHeight * 0.02;
        },
    },
};
