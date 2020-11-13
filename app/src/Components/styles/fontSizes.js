export var fontSizes = {
    desktop: {
        medium1: () => {
            return window.screen.availHeight * 0.025;
        },
        medium2: () => {
            return window.screen.availHeight * 0.019;
        },
        medium3: () => {
            return window.screen.availHeight * 0.021;
        },
        medium4: () => {
            return window.screen.availHeight * 0.028;
        },
        medium5: () => {
            return window.screen.availHeight * 0.04;
        },
        small1: () => {
            return window.screen.availHeight * 0.01;
        },
        small2: () => {
            return window.screen.availHeight * 0.015;
        },
        small3: () => {
            return window.screen.availHeight * 0.018;
        },
        actualUnit1: (containerHeight) => {
            /**some fonts are in containers defined by actual unit lengths (like px)
             * and some are not. If so than uses cointainerHeight
             */
            return containerHeight *0.0375 
        }
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
        actualUnit1: (containerHeight) => {
            /**some fonts are in containers defined by actual unit lengths (like px)
             * and some are not. If so than uses cointainerHeight
             */
            return containerHeight * 0.0375
        }
    },
};
