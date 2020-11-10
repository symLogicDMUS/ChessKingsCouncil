import { pieceProfilesSizePos } from "./pieceProfilesSizePos";
import { styleObjects as navBarStyleObjects } from "../NavBar/styleObjects";

export var styleObjects = {
    desktop: {
        topBar: (scaler) => {
            const windowSizePos = pieceProfilesSizePos["desktop"](scaler);
            return {
                width: windowSizePos.width,
                height: windowSizePos.height * 0.075 * scaler,
                top: 0,
                left: 0,
            };
        },
        title: (scaler) => {
            const windowSizePos = pieceProfilesSizePos["desktop"](scaler);
            return {
                height: windowSizePos.height * 0.075 * scaler,
                width: windowSizePos.width * 0.1,
                left: windowSizePos.width * 0.008,
            };
        },
        profiles: (scaler) => {
            const windowSizePos = pieceProfilesSizePos["desktop"](scaler);
            const navBarSizePos = navBarStyleObjects["desktop"]();
            return {
                width: windowSizePos.width,
                height: windowSizePos.height - navBarSizePos.height * scaler,
                top: windowSizePos.height * 0.075 * scaler,
                left: 0,
            };
        },
        textLabels: (scaler) => {
            return {
                fontSize: window.screen.availHeight * 0.08 * scaler,
            }
        },
    },
    mobile: {
        topBar: (scaler) => {
            const windowSizePos = pieceProfilesSizePos["desktop"](scaler);
            const navBarSizePos = navBarStyleObjects["desktop"]();
            return {
                width: windowSizePos.width,
                height: windowSizePos.height * 0.1 * scaler,
                top: navBarSizePos.height * scaler,
                left: 0,
            };
        },
        title: (scaler) => {
            const windowSizePos = pieceProfilesSizePos["desktop"](scaler);
            return {
                fontSize: windowSizePos.height * 0.075 * 0.9 * scaler,
                marginTop: windowSizePos.height * 0.075 * 0.05 * scaler,
                border: "1px dashed green",
            };
        },
        profiles: (scaler) => {
            const windowSizePos = pieceProfilesSizePos["desktop"](scaler);
            const navBarSizePos = navBarStyleObjects["desktop"]();
            return {
                width: windowSizePos.width,
                height: windowSizePos.height - navBarSizePos.height * scaler,
                top: windowSizePos.height * 0.075 * scaler,
                left: 0,
            };
        },
    },
};
