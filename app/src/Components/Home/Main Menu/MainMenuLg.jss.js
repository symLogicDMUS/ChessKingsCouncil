import { darken, makeStyles } from "@material-ui/core/styles";
import { themes } from "../../styles/themes/themes.jss";

const topAreaHeight = 40;

export const textColor = "#fff";

export const buttonStyle = { maxWidth: 130 };

export const signOutStyleOverride = (theme) => ({
    color: themes[theme].text,
    marginRight: "0.5rem",
});

export const svgBannerThemes = [
    "dark",
    "tan",
    "red_blue",
    "dark_alt",
    "red_blue_alt",
    "tan_dark",
    "classic_dark",
];

/* for themes not svgBannerThemes */
export const bannerFileNames = {
    blue: "main menu banner-blue.png",
    NBA: "main menu banner-NBA.png",
    mechwarrior_a_team: "main menu banner-mechwarrior_a_team.png",
    mechwarrior_b_team: "main menu banner-mechwarrior_b_team.png",
    star_wars: "a long time ago.svg",
};

export const bannerStyle = (theme) => ({
    width: "100%",
    height: "100%",
    borderBottom: `1px solid ${darken(themes[theme].menu_container, 0.1)}`,
});

export const useStyles = makeStyles(
    {
        root: (props) => ({
            "--space": `calc(100vh - ${topAreaHeight}px)`,
            "--bannerHeight": "calc(var(--space) * 0.4)",
            "--menuHeight": "calc(var(--space) * 0.6)",
        }),
        banner: (props) => ({
            zIndex: 1,
            width: "100vw",
            height: "var(--bannerHeight)",
            verticalAlign: "middle",
        }),
        main_menu_container: (props) => ({
            zIndex: 1,
            width: "100vw",
            height: "var(--menuHeight)",
            display: "flex",
            flexDirection: "column",
            backgroundColor: themes[props.theme].menu_container,
        }),
        main_menu: (props) => ({
            margin: "auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
        }),
        title: (props) => ({
            width: "67.5vw",
            height: "auto",
            fill: themes[props.theme].title,
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
