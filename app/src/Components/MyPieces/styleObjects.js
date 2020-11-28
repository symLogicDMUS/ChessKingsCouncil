import {winHeight, winWidth} from "../helpers/windowMeasurments";

export var styleObjects = {
    desktop: {
        topBar: () => {
            return {
                width: winWidth() * 0.6.width,
                height: winHeight() * 0.6.height * 0.075,
                top: 0,
                left: 0,
            };
        },
        title: () => {
            return {
                height: winWidth() * 0.6 * 0.075,
                width: winWidth() * 0.1,
                left: winWidth() * 0.008,
            };
        },
        profiles: () => {
            return {
                width: winWidth(),
                height: winHeight() - winHeight(),
                top: winHeight() * 0.075,
                left: 0,
            };
        },
    },
    mobile: {
        topBar: () => {
            return {
                width: winWidth(),
                height: winHeight() * 0.1,
                top: winHeight() * 0.1,
                left: 0,
            };
        },
        title: () => {

            return {
                fontSize: winHeight() * 0.075 * 0.9,
                marginTop: winHeight() * 0.075 * 0.05,
                border: "1px dashed green",
            };
        },
        profiles: () => {

        },
    },
};
