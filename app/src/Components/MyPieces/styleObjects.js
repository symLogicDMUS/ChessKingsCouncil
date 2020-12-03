import {availHeight, availWidth} from "../helpers/windowMeasurments";

export var styleObjects = {
    desktop: {
        topBar: () => {
            return {
                width: availWidth() * 0.6.width,
                height: availHeight() * 0.6.height * 0.075,
                top: 0,
                left: 0,
            };
        },
        title: () => {
            return {
                height: availWidth() * 0.6 * 0.075,
                width: availWidth() * 0.1,
                left: availWidth() * 0.008,
            };
        },
        profiles: () => {
            return {
                width: availWidth(),
                height: availHeight() - availHeight(),
                top: availHeight() * 0.075,
                left: 0,
            };
        },
    },
    mobile: {
        topBar: () => {
            return {
                width: availWidth(),
                height: availHeight() * 0.1,
                top: availHeight() * 0.1,
                left: 0,
            };
        },
        title: () => {

            return {
                fontSize: availHeight() * 0.075 * 0.9,
                marginTop: availHeight() * 0.075 * 0.05,
                border: "1px dashed green",
            };
        },
        profiles: () => {

        },
    },
};
