import { styleObjects as navBarStyleObjects } from "../NavBar/styleObjects";

export var styleObjects = {
    desktop: {
        profilesWindow: (scaler) => {
            const width = window.screen.availWidth;
            const height = window.screen.availHeight * scaler;
            return { width: width, height: height, top: window.screen.availHeight * 0.075, left: 0 };
        },

        topBar: (scaler) => {
            return {
                width: window.screen.availWidth,
                height: window.screen.availHeight * scaler * 0.1,
                top: 0,
                left: 0,
            };
        },
        title: (scaler) => {
            return {
                height: window.screen.availHeight * scaler * 0.09,
                width: window.screen.availWidth * 0.25,
                fontSize: window.screen.availHeight * 0.035,
            };
        },
        profiles: (scaler) => {
            return {
                width: window.screen.availWidth,
                height: window.screen.availHeight - window.screen.availHeight * 0.1 * scaler,
                top: window.screen.availHeight * scaler * 0.1,
                left: 0,
            };
        },
        textLabels: (scaler) => {
            return {
                fontSize: window.screen.availHeight * 0.08 * scaler,
            };
        },
    },
    mobile: {
        profilesWindow: (scaler) => {
            const width = window.screen.availWidth;
            const height = window.screen.availHeight * scaler;
            return { width: width, height: height, top: window.screen.availHeight * 0.1, left: 0 };
        },
        topBar: (scaler) => {
            return {
                width: window.screen.availWidth,
                height: window.screen.availHeight * 0.1 * scaler,
                top: window.screen.availHeight * 0.1 * scaler,
                left: 0,
            };
        },
        title: (scaler) => {
            return {
                fontSize: window.screen.availHeight * 0.075 * 0.9 * scaler,
                marginTop: window.screen.availHeight * 0.075 * 0.05 * scaler,
                border: "1px dashed green",
            };
        },
        profiles: (scaler) => {
            return {
                width: window.screen.availWidth,
                height: window.screen.availHeight - window.screen.availHeight * 0.1 * scaler,
                top: window.screen.availHeight * 0.075 * scaler,
                left: 0,
            };
        },
    },
};
