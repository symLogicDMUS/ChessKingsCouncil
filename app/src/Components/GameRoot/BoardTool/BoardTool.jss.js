import makeStyles from "@material-ui/core/styles/makeStyles";
import {drawerItemWidth} from "../../Reuseables/PermanentDrawer.jss";
import {themes} from "../../styles/themes.jss";


export const useStyles = makeStyles({
    range_display_tool: props => ({
        fontSize: props.fontSize,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        '@media screen and (min-width: 768px)': {
            width: {drawerItemWidth},
            height: '8em',
        },
        '@media screen and (max-width: 767px)': {
            width: '100%',
            height: '100%',
            alignItems: 'center'
        },
    }),
    flex_header: props => ({
        fontSize: props.fontSize,
        width: '8.05em',
        height: '0.7em',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        border: `0.04em solid ${themes[props.theme].outline}`,
    }),
    title: props => ({
        fontSize: props.fontSize * 0.48,
        fontFamily: 'Roboto-Light, Roboto',
        color: themes[props.theme].text,
        height: '1em',
        lineHeight: '0.96em',
    }),
});
