import {modal} from "../../../helpers/modal.jss";
import {themes} from "../../../styles/themes.jss";
import {fontSize0015, fontSize0016, fontSize001725, fontSize00175, fontSize002} from "../../../styles/fontSizes.jss";
import {appBarHeight} from "../../../Reuseables/Drawers/PersistentDrawer.jss";
import {itemChoicesWindowWidth} from "../../../Reuseables/Modals/MuiGrid.jss";

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

export const close_icon = (screenCase) => {
    switch (screenCase) {
        case 'mobile':
            return {
                fontSize: fontSize00175,
                width: "2em",
                height: "2em",
            }
        default:
            return {
                fontSize: fontSize002,
                width: '1.5em',
                height: '1.5em',
                alignSelf: 'flex-start',
            }
    }
};

export const searchBoxStyleDesktop = () => ({marginLeft: 'auto'});
export const imgModalTitleDesktop = () => ({marginLeft: itemChoicesWindowWidth('desktop')*0.45});
export const searchBoxWidthDesktop = () => itemChoicesWindowWidth('desktop') * 0.3;

export const styles = {
    modal: props => ({
        ...modal,
        zIndex: 6,
    }),
    title_container: props => ({
        display: 'inline-flex',
        flexWrap: 'nowrap',
        alignItems: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
    }),
    title: props => ({
        fontSize: '2em',
        fontFamily: 'Roboto-Light, Roboto',
        fontWeight: 400,
        lineHeight: '0.7em',
        marginRight: '0.25em',
        color: themes[props.theme].text,
    }),
    title_icon: props => ({
        '@media screen and (min-device-width: 1040px)': {
            fontSize: fontSize0016,
        },
        '@media screen and (max-device-width: 1040px)': {
            fontSize: fontSize0015,
        },
        height: '2em',
        width: '2em',
        marginLeft: '0.25em',
        color: themes[props.theme].text,
    }),
    title_box: props => ({
        width: '11em',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: '12em',
    }),
};
