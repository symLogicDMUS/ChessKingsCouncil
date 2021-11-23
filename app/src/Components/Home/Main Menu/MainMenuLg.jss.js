import { darken, lighten, makeStyles } from "@material-ui/core/styles";
import { themes } from "../../styles/themes/themes.jss";
import { navBarButtonHeight } from "../../Reuseables/NavBar/NavBarButton.jss";

export const topAreaHeight = 100;

/* for themes not svgBannerThemes */
export const homepageBackgroundImages = {
    light: "move king.png",
    dark: "chess black pawns.png",
    tan: "king knock over king.png",
    tan_dark: "king knock over king.png",
    blue: "move king.png",
    NBA: "swish.png",
    mechwarrior_a_team: "red desert 2.png",
    mechwarrior_b_team: "red desert 2.png",
    star_wars: "death star 2.png",
    red_blue: "chess black pawns.png",
    dark_alt: "chess black pawns.png",
    red_blue_alt: "chess black pawns.png",
    classic_dark: "chess black pawns.png",
};

export const bannerStyle = (theme) => ({
    width: "100%",
    height: "100%",
    borderBottom: `1px solid ${darken(themes[theme].menu_container, 0.1)}`,
});

export const useStyles = makeStyles(
    {
        banner: (props) => ({
            zIndex: -1,
            height: "100vh",
            minWidth: "100vw",
            position: "fixed",
            top: 0,
        }),
        main_menu_container: (props) => ({
            position: "fixed",
            top: 0,
            display: "flex",
            flexDirection: "column",
            width: "100vw",
            height: topAreaHeight,
            backgroundColor: themes[props.theme].menu_container,
            zIndex: 1200,
            boxShadow:
                "0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)",
        }),
        main_menu: (props) => ({
            margin: "auto",
            display: "flex",
            flexDirection: "column",
        }),
        content: {
            position: "fixed",
            top: "7vw",
            left: 24,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "auto",
        },
        title: (props) => ({
            width: "50vw",
            fill: themes[props.theme].title,
        }),
        subtitle: (props) => ({
            width: "35vw",
            minWidth: 400,
            fill: themes[props.theme].title,
        }),
        watch_demo: {
            position: "fixed",
            top: "45vh",
            left: "20vw",
        },
        navBar: (props) => ({
            "& .MuiListItemText-primary": {
                color: themes[props.theme].title,
            },
            "& .MuiSvgIcon-root": {
                color: themes[props.theme].title,
            },
            "& .MuiTypography-root": {
                color: themes[props.theme].title,
            },
            "& .MuiListItem-root": {
                backgroundColor: "rgba(0, 0, 0, 0)",
                "&:hover": {
                    backgroundColor: "rgba(0, 0, 0, 0)",
                    borderBottom: `2px solid ${themes[props.theme].title}`,
                },
            },
            "& .MuiButton-root": {
                backgroundColor: "rgba(0, 0, 0, 0)",
                "&:hover": {
                    backgroundColor: "rgba(0, 0, 0, 0)",
                    borderBottom: `2px solid ${themes[props.theme].title}`,
                },
            },
        }),
        demo: (props) => ({
            width: "100vw",
            position: "absolute",
            top: 48,
            height: `calc(100vh - 48px)`,
            display: "flex",
            flexDirection: "column",
        }),
        iframe: {
            "--height1": `calc(100vh - 48px)`,
            "--height2": `calc(var(--height1) - 6rem)`,
            width: "calc(var(--height2) * 1.7769)",
            height: "var(--height2)",
            margin: "auto",
        },
        about: {
            "@media (max-width:960px)": {
                width: "100vw",
            },
            "@media (min-width:960px)": {
                width: "60vw",
            },
            marginLeft: "auto",
            marginRight: "auto",
        },
        page_links: (props) => ({
            display: "flex",
        }),
        page_link: (props) => ({
            fill: themes[props.theme].page_link,
            "&:hover": {
                fill: themes[props.theme].page_link_hover,
            },
        }),
        button: (props) => ({
            borderRadius: 0,
            margin: "0 0.35rem",
            color: themes[props.theme].text,
            backgroundColor: themes[props.theme].fill,
        }),
        app_bar: (props) => ({
            zIndex: 2,
            position: "fixed",
            top: 0,
            height: topAreaHeight,
            width: "100vw",
            display: "flex",
            flexDirection: "row",
            flexWrap: "no-wrap",
            alignItems: "center",
            justifyContent: "flex-end",
            backgroundColor: themes[props.theme].fill,
            boxShadow:
                "0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)",
        }),
        icon: (props) => ({
            fontSize: "1rem",
        }),
    },
    { index: 1 }
);
