import { initWidth, computeX, computeY, gw } from "../styles/scaleValues";

//column width
const cw = 185;
const iconSize = cw * 0.22;
const iconMargin = 5;
const iconColWidth = iconSize + iconMargin * 2;
const navBarHeight = iconColWidth;
const helpIconSize = iconSize * 0.95;
const helpIconTop = navBarHeight * 0.1;
const helpIconLeft = iconSize * 0.12;
const togleNavWidth = initWidth - (cw * 8 + cw * 0.21);
const togleNavAdjustY = -navBarHeight * 0.132;

export function getPageIconStyle() {
    return { width: iconSize, margin: iconMargin };
}

export function getHelpIconStyle() {
    return {
        cursor: "pointer",
        width: helpIconSize,
        height: helpIconSize,
        marginTop: helpIconTop,
        marginLeft: helpIconLeft,
    };
}

export function getTogleNavWidgetStyle() {
    return {
        cursor: "pointer",
        position: "relative",
        height: navBarHeight + iconMargin * 2.5,
        width: togleNavWidth,
        top: togleNavAdjustY,
    };
}

function getTextContainer() {
    return {
        textAlign: "center",
        paddingTop: computeY(6),
        color: "#b6b6b6",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        fontSize: computeY(16),
        wordWrap: "break-word",
    };
}

function getNavBarButton() {
    return {
        position: "absolute",
        zIndex: "inherit",
        display: "grid",
        gridTemplateColumns: `${iconColWidth}px auto`,
        gridTemplateRows: navBarHeight,
        backgroundColor: "#515151",
        borderRight: "1px solid #707070",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        textDecoration: "none",
    };
}

export var styles = {
    nav_bar: {
        position: "absolute",
        left: 0,
        // display: "grid",
        zIndex: 0,
        //gridTemplateColumns: `${gw(iconSize)}px ${gw(cw)}px ${gw(cw)}px ${gw(cw)}px ${gw(cw)}px ${gw(cw)}px ${gw(cw)}px ${gw(cw)}px ${gw(cw)}px ${gw(togleNavWidth)}px`,
        border: "1px dashed #1bfaae",
    },

    help: {
        // gridColumn: "1",
        left: 0,
        zIndex: "inherit",
        height: navBarHeight,
        backgroundColor: "#515151",
        borderRight: "1px solid #707070",
    },

    home: {
        // gridColumn: "2",
        left: `${gw(iconSize)}px`,
        ...getNavBarButton(),
        icon: {
            gridRow: "1",
            gridColumn: "1",
        },
        text: {
            gridRow: "1",
            gridColumn: "2",
            ...getTextContainer(),
        },
    },

    new_game: {
        // gridColumn: "3",
        left: `${gw(iconSize) + gw(cw)}px`,
        ...getNavBarButton(),
        icon: {
            gridRow: "1",
            gridColumn: "1",
        },
        text: {
            gridRow: "1",
            gridColumn: "2",
            ...getTextContainer(),
        },
    },

    load_game: {
        // gridColumn: "4",
        left: `${gw(iconSize) + gw(cw)  * 2}px`,
        ...getNavBarButton(),
        icon: {
            gridRow: "1",
            gridColumn: "1",
        },
        text: {
            gridRow: "1",
            gridColumn: "2",
            ...getTextContainer(),
        },
    },

    create_piece: {
        // gridColumn: "5",
        left: `${gw(iconSize) + gw(cw)  * 3}px`,
        ...getNavBarButton(),
        icon: {
            gridRow: "1",
            gridColumn: "1",
        },
        text: {
            gridRow: "1",
            gridColumn: "2",
            ...getTextContainer(),
        },
    },

    chess_rules: {
        // gridColumn: "6",
        left: `${gw(iconSize) + gw(cw)  * 4}px`,
        ...getNavBarButton(),
        icon: {
            gridRow: "1",
            gridColumn: "1",
        },
        text: {
            gridRow: "1",
            gridColumn: "2",
            ...getTextContainer(),
        },
    },

    my_pieces: {
        // gridColumn: "7",
        left: `${gw(iconSize) + gw(cw)  * 5}px`,
        ...getNavBarButton(),
        icon: {
            gridRow: "1",
            gridColumn: "1",
        },
        text: {
            gridRow: "1",
            gridColumn: "2",
            ...getTextContainer(),
        },
    },

    council_rules: {
        // gridColumn: "8",
        left: `${gw(iconSize) + gw(cw)  * 6}px`,
        ...getNavBarButton(),
        icon: {
            gridRow: "1",
            gridColumn: "1",
        },
        text: {
            gridRow: "1",
            gridColumn: "2",
            ...getTextContainer(),
        },
    },

    author_github: {
        // gridColumn: "9",
        left: `${gw(iconSize) + gw(cw)  * 7}px`,
        ...getNavBarButton(),
        icon: {
            gridRow: "1",
            gridColumn: "1",
        },
        text: {
            gridRow: "1",
            gridColumn: "2",
            ...getTextContainer(),
        },
    },

    togle_nav: {
        // gridColumn: "10",
        left: `${gw(iconSize) + gw(cw)  * 8}px`,
        cursor: "pointer",
    },
};