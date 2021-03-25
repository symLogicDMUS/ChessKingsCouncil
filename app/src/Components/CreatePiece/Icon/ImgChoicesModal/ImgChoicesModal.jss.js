import {modal} from "../../../helpers/modal.jss";
import {themes} from "../../../styles/themes.jss";
import {fontSize0015, fontSize0016, fontSize00175, fontSize002} from "../../../styles/fontSizes.jss";
import {appBarHeight} from "../../../Reuseables/Drawers/PersistentDrawer.jss";

export const img_grid_root = (screenCase) => {
    switch (screenCase) {
        case 'mobile':
            return {
                marginTop: appBarHeight
            }
        default:
            return null;
    }
};

export const styles = {
    modal: props => ({
        ...modal,
        zIndex: 6,
    }),
    title_box: props => ({
        display: 'inline-flex',
        alignItems: 'center',
        transform: 'translate(0, 1em)'
    }),
    title: props => ({
        fontSize: '2em',
        lineHeight: '0.7em',
        marginRight: '0.25em',
        fontFamily: 'Roboto-Light, Roboto',
        color: themes[props.theme].text,
    }),
    title_icon: props => ({
        '@media screen and (min-width: 960px)': {
            fontSize: fontSize0016,
        },
        '@media screen and (max-width: 960px)': {
            fontSize: fontSize0015,
        },
        height: '2em',
        width: '2em',
        marginLeft: '0.25em',
        color: themes[props.theme].text,
    }),
    close_icon: props => ({
        /*media query for phones/tablets (generalized)*/
        '@media screen and (max-width: 960px)': {
            fontSize: fontSize00175,
            width: "2em",
            height: "2em",
        },
        '@media screen and (min-width: 960px)': {
            fontSize: fontSize002,
            width: '1.5em',
            height: '1.5em',
            alignSelf: 'flex-end',
            margin: '0.15em',
        },
    }),
    img_grid_root: props => ({
        '@media screen and (max-width: 960px)': {
            marginTop: appBarHeight
        },
    }),
};
