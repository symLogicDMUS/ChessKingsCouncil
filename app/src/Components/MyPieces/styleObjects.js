import { pieceProfilesSizePos } from "../PieceProfile/pieceProfilesSizePos";
import { styleObjects as navBarStyleObjects } from "../NavBar/styleObjects";

export var styleObjects = {
    desktop: {
        topBar: () => {
            const windowSizePos = pieceProfilesSizePos["desktop"]();
            return {
                width: windowSizePos.width,
                height: windowSizePos.height * 0.075,
                top: 0,
                left: 0,
            };
        },
        title: () => {
            const windowSizePos = pieceProfilesSizePos["desktop"]();
            return {
                height: windowSizePos.height * 0.075,
                width: windowSizePos.width * 0.1,
                left: windowSizePos.width * 0.008,
            };
        },
        profiles: () => {
            const windowSizePos = pieceProfilesSizePos["desktop"]();
            const navBarSizePos = navBarStyleObjects["desktop"]()
            return {
                width: windowSizePos.width,
                height: windowSizePos.height - navBarSizePos.height,
                top: windowSizePos.height * 0.075,
                left: 0,
            };
        },
    },
    mobile: {
        topBar: () => {
            const windowSizePos = pieceProfilesSizePos["desktop"]();
            const navBarSizePos = navBarStyleObjects["desktop"]();
            return {
                width: windowSizePos.width,
                height: windowSizePos.height * 0.1,
                top: navBarSizePos.height,
                left: 0,
            };
        },
        title: () => {
            const windowSizePos = pieceProfilesSizePos["desktop"]();
            return {
                fontSize: windowSizePos.height * 0.075 * 0.9,
                marginTop: windowSizePos.height * 0.075 * 0.05,
                border: "1px dashed green",
            };
        },
        profiles: () => {
            const windowSizePos = pieceProfilesSizePos["desktop"]();
        },
    },
};
