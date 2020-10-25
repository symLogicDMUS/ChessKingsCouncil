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
        display: "grid",
        zIndex: 0,
        gridTemplateColumns: `${gw(iconSize)}px ${gw(cw)}px ${gw(cw)}px ${gw(cw)}px ${gw(cw)}px ${gw(cw)}px ${gw(cw)}px ${gw(cw)}px ${gw(cw)}px ${gw(togleNavWidth)}px`,
        border: `1 solid #707070`,
    },

    help: {
        gridColumn: "1",
        zIndex: "inherit",
        height: navBarHeight,
        backgroundColor: "#515151",
        borderRight: "1px solid #707070",
    },

    home: {
        gridColumn: "2",
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
        gridColumn: "3",
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
        gridColumn: "4",
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
        gridColumn: "5",
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
        gridColumn: "6",
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
        gridColumn: "7",
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
        gridColumn: "8",
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
        gridColumn: "9",
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
        cursor: "pointer",
        gridColumn: "10",
    },
};
