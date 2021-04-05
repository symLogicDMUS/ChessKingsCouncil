import {modal} from "../../../helpers/modal.jss";
import {fontSize00175, fontSize002} from "../../../styles/fontSizes.jss";
import {appBarHeight} from "../../../Reuseables/Drawers/PersistentDrawer.jss";

export const styles = {
    modal: props => ({
        ...modal,
        zIndex: 6,
    }),
    close: props => ({
        '@media screen and (max-width: 960px)': {
            fontSize: fontSize00175,
            width: "2.2em",
            height: "2.2em",
            marginLeft: 'auto',
        },
        '@media screen and (min-width: 960px)': {
            fontSize: fontSize002,
            width: '1.5em',
            height: '1.5em',
            alignSelf: 'flex-end',
            margin: '0.15em',
        },
    }),
    close_icon: props => ({
        '@media screen and (max-width: 960px)': {
            fontSize: fontSize00175,
            width: "1.25em",
            height: "1.25em",
            marginLeft: 'auto',
        },
        '@media screen and (min-width: 960px)': {
            fontSize: fontSize002,
            width: '1.15em',
            height: '1.15em',
            alignSelf: 'flex-end',
            margin: '0.15em',
        },
    }),
    img_grid_root: props => ({
        '@media screen and (max-width: 960px)': {
            marginTop: appBarHeight
        },
    }),
    mui_grid: props => ({
        '@media screen and (max-width: 960px)': {
            height: `calc(100vh - ${appBarHeight}px)`,
        },
        '@media screen and (min-width: 960px)': {
            height: '90vh',
        },
    }),
};
