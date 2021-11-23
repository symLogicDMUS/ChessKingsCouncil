import { makeStyles } from "@material-ui/core/styles";
import { themes } from "../../styles/themes/themes.jss";

export const homepageBackgroundImages = {
    light: "move king.jpg",
    dark: "chess black pawns.jpg",
    tan: "king knock over king.jpg",
    tan_dark: "king knock over king.jpg",
    blue: "move king.jpg",
    NBA: "swish.jpg",
    mechwarrior_a_team: "red desert 2.png",
    mechwarrior_b_team: "red desert 2.png",
    star_wars: "a long time ago.svg",
    red_blue: "chess black pawns.jpg",
    dark_alt: "chess black pawns.jpg",
    red_blue_alt: "chess black pawns.jpg",
    classic_dark: "chess black pawns.jpg",
};

export const drawerWidth = 200;

export const useStyles = makeStyles((theme) => ({
    root: (props) => ({
        display: "flex",
    }),
    appBar: (props) => ({
        transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        backgroundColor: themes[props.theme].fill,
        zIndex: 10,
    }),
    appBarShift: (props) => ({
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
    menuButton: (props) => ({
        marginRight: theme.spacing(2),
        color: themes[props.theme].text,
    }),
    hide: (props) => ({
        display: "none",
    }),
    drawer: (props) => ({
        width: drawerWidth,
        flexShrink: 0,
    }),
    drawerPaper: (props) => ({
        zIndex: 12,
        width: drawerWidth,
        backgroundColor: themes[props.theme].fill,
    }),
    drawerHeader: (props) => ({
        display: "flex",
        alignItems: "center",
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: "flex-end",
    }),
    content: (props) => ({
        flexGrow: 1,
        transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    }),
    contentShift: (props) => ({
        transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    }),
    text: (props) => ({
        color: themes[props.theme].text,
    }),
    title: (props) => ({
        flexGrow: 1,
    }),
    app_title: (props) => ({
        height: 24,
    }),
    demo: (props) => ({
        width: "100vw",
        border: "3px dashed red",
        height: `calc(100vh - 100px - 48px)`,
        display: "flex",
        flexDirection: "column",
    }),
    iframe: {
        "@media (max-width:960px)": {
            width: "100vw",
            height: `calc(100vw * 0.56277)`,
        },
        "@media (min-width:960px)": {
            width: "60vw",
            height: `calc(60vw * 0.56277)`,
        },
        marginLeft: "auto",
        marginRight: "auto",
    },
    banner: {
        width: "100vw",
        maxHeight: "50vh",
    },
}));
