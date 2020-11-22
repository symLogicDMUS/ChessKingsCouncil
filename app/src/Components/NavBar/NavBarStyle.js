//since navBar is included on every page, we want to have a cascading effect if we decide to change this value
export const navBarWidth = window.screen.availWidth;
export const navBarHeight =window.screen.availHeight * 0.052;

export var styleObjects = {
    desktop: () => {
        return {
            width: window.screen.availWidth,
            height: navBarHeight,
            left: 0,
            top: 0,
        };
    },
    mobile: () => {
        return {

        }
    },
};
