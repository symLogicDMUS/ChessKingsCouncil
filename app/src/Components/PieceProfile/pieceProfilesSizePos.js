import {styleObjects as navBarStyleObjects} from "../NavBar/styleObjects";

export var pieceProfilesSizePos = {
    desktop: () => {
        const navBarSizePos = navBarStyleObjects["desktop"]()
        const width = window.screen.availWidth;
        const height = window.screen.availHeight * 0.9;
        return { width: width, height: height, top: navBarSizePos.height, left: 0};
    },

    mobile: () => {
        const navBarSizePos = navBarStyleObjects["desktop"]()
        const width = window.screen.availWidth;
        const height = window.screen.availHeight * 0.9;
        return { width: width, height: height, top: navBarSizePos.height, left: 0 };
    },
};

