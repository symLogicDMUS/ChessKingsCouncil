import {availHeight, availWidth} from "../../helpers/windowMeasurments";
import {text} from "../../PieceProfiles/Header/PieceHeader.jss";
import {drawerWidth} from "../../Reuseables/PermanentDrawer.jss";
import {themes} from "../../styles/themes.jss";

/* unit % */
export const drawerItemWidth = drawerWidth*0.86;
export const drawerItemMarginTopBottom = '3.5%';
export const drawerItemMarginLeft = '7%';

export const drawer_component = (fontSize) => ({
    fontSize: fontSize,
    width: drawerItemWidth,
    marginLeft: drawerItemMarginLeft,
    marginTop: drawerItemMarginTopBottom,
    marginBottom: drawerItemMarginTopBottom,
    fontFamily: 'Roboto-Light, Roboto',
});

export const drawer_table_button = (fontSize) => ({
    fontSize: fontSize,
    width: drawerItemWidth,
    borderTopLeftRadius: '0.1em',
    borderTopRightRadius: '0.1em',
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    disableElevation: true,
});

export const list_title = (fontSize, theme) => ({
    textAlign: 'center',
    ...text(fontSize, theme),
    backgroundColor: themes[theme].fill,
});

export const styles = {
    customize: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        height: availHeight() * 0.95,
        width: availWidth(),
    },
    list_title: props => ({
        width: drawerItemWidth,
        ...list_title(props.fontSize, props.theme),
        outline: `0.05em solid ${themes[props.theme].outline}`,
    }),
    promo_all_container: props => ({
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignContent: 'center',
        ...drawer_component(props.fontSize),
    }),
    divider: props => ({
        fontSize: props.fontSize,
        width: '100%',
        marginTop: '0.75em',
        marginBottom: '0.75em',
    }),
};