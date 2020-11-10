export var styleObjects = {
    desktop: {
        PromoList: () => {
            const width = window.screen.availWidth * 0.5;
            const height = window.screen.availHeight * 0.2;
            const top = window.screen.availHeight * 0.67;
            const left = window.screen.availWidth * 0.5;
            return { width: width, height: height, top: top, left: left, zIndex: 5 };
        },
        SubList: () => {
            const width = window.screen.availWidth * 0.5;
            const height = window.screen.availHeight * 0.2;
            const top = window.screen.availHeight * 0.67;
            const left = 0;
            return { width: width, height: height, top: top, left: left, zIndex: 5 };
        },
        bottomBar: () => {
            return {
                width: window.screen.availWidth,
                height: window.screen.availHeight * 0.05,
                top: window.screen.availHeight * 0.2 + window.screen.availHeight * 0.67,
                left: 0,
                zIndex: 5,
            };
        },
    },
    mobile: {
        PromoList: () => {
            const width = window.screen.availWidth * 0.5;
            const height = window.screen.availHeight * 0.2;
            const top = window.screen.availHeight * 0.67;
            const left = window.screen.availWidth * 0.5;
            return { width: width, height: height, top: top, left: left };
        },
        SubList: () => {
            const width = window.screen.availWidth * 0.5;
            const height = window.screen.availHeight * 0.2;
            const top = window.screen.availHeight * 0.67;
            const left = 0;
            return { width: width, height: height, top: top, left: left };
        },
        bottomBar: () => {
            return {
                width: window.screen.availWidth,
                height: window.screen.availHeight * 0.05,
                top: window.screen.availHeight * 0.67 + window.screen.availHeight * 0.2,
                left: 0,
            };
        },
    },
};
