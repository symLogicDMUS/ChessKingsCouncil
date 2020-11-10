import {styleObjects as navBarStyleObjects} from "../NavBar/styleObjects";

export var pieceProfilesSizePos = {
    desktop: (scaler) => {
        const navBarSizePos = navBarStyleObjects["desktop"]()
        const width = window.screen.availWidth;
        const height = window.screen.availHeight * scaler;
        return { width: width, height: height, top: navBarSizePos.height*1.1, left: 0};
    },

    mobile: (scaler) => {
        const navBarSizePos = navBarStyleObjects["desktop"]()
        const width = window.screen.availWidth;
        const height = window.screen.availHeight * scaler;
        return { width: width, height: height, top: navBarSizePos.height, left: 0 };
    },
};

