import {availHeight, availWidth} from "../../helpers/windowMeasurments";
import {text} from "../../PieceProfiles/Header/PieceHeader.jss";
import {themes} from "../../styles/themes.jss";

export const drawerWidth = availWidth() * 0.23;
export const sideBarWidth = drawerWidth * 0.75;
export const sideBarHeight = availHeight() * 0.9;
const drawerItemWidth = '95%';
const drawerItemMargin = '4%';


export const drawer_component = (fontSize) => ({
    width: drawerItemWidth,
    margin: drawerItemMargin,
    fontSize: fontSize,
    fontFamily: 'Roboto-Light, Roboto',
    marginBottom: '1em',
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
    width: drawerItemWidth,
    ...text(fontSize, theme),
    backgroundColor: themes[theme].fill,
    outline: `0.05em solid ${themes[theme].outline}`,
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
        ...list_title(props.fontSize, props.theme),
    }),
    box: props => ({
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignContent: 'center',
    }),
    divider: props => ({
        fontSize: props.fontSize,
        width: '100%',
        marginTop: '0.75em',
        marginBottom: '0.75em',
    }),
};
