import { darken, lighten, makeStyles } from "@material-ui/core/styles";
import { themes } from "../../styles/themes/themes.jss";
import { navBarButtonHeight } from "../../Reuseables/NavBar/NavBarButton.jss";

export const topAreaHeight = 100;

/* for themes not svgBannerThemes */
export const homepageBackgroundImages = {
    light: "move king.jpg",
    dark: "chess white pieces.jpg",
    tan: "king knock over king.jpg",
    tan_dark: "king knock over king.jpg",
    blue: "move king.jpg",
    NBA: "swish.jpg",
    mechwarrior_a_team: "red desert 2.png",
    mechwarrior_b_team: "red desert 2.png",
    star_wars: "a long time ago.svg",
    red_blue: "chess white pieces.jpg",
    dark_alt: "chess white pieces.jpg",
    red_blue_alt: "chess white pieces.jpg",
    classic_dark: "chess white pieces.jpg",
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
            width: "100vw",
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
        title: (props) => ({
            fill: themes[props.theme].title,
            height: topAreaHeight * 0.65,
            margin: "auto",
        }),
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
        }),
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
