import {themes} from "../../styles/themes.jss";
import {availWidth} from "../../helpers/windowMeasurments";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {drawerItemWidth} from "../../NewGame/Customize/Customize.jss";
import {fontSize0019, fontSize002, fontSize00219,} from "../../styles/fontSizes.jss";

export const useStyles = makeStyles({
        board_tool: props => ({
            display: 'flex',
            justifyContent: 'center',
            '@media screen and (max-width: 960px)': {
                flexDirection: 'row',
                flex: 'nowrap',
                width: '100%',
                alignItems: 'center',
            },
            '@media screen and (min-width: 960px)': {
                flexDirection: 'row',
                flexWrap: 'wrap',
                fontSize: drawerItemWidth * 0.125,
                width: drawerItemWidth,
                marginLeft: '5%',
                marginBottom: '6vh',
                height: '8em',
            },
        }),
        flex_header: props => ({
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            /*media query for phones/tablets (generalized)*/
            '@media screen and (max-width: 960px)': {
                flexGrow: 10,
            },
            '@media screen and (min-width: 960px)': {
                fontSize: fontSize002,
                height: '0.7em',
                width: '8em',
                outline: `0.04em solid ${themes[props.theme].outline}`,
            },
        }),
        title: props => ({
            fontSize: fontSize00219,
            height: '1em',
            lineHeight: '0.96em',
            fontFamily: 'Roboto-Light, Roboto',
            color: themes[props.theme].text,
        }),
        checkbox_container: props => ({
            flexGrow: 10,
            display: 'inline-flex',
            flexDirection: 'row',
            flexWrap: 'nowrap',
            alignItems: 'center',
            justifyContent: 'center',
        }),
        checkbox: props => ({
            color: themes[props.theme].text,
            '@media screen and (min-width: 960px)': {
                fontSize: fontSize002,
            },
            /*media query for phones/tablets (generalized)*/
            '@media screen and (max-width: 960px)': {
                fontSize: fontSize002
            },
            height: '1.5em',
            width: '1.5em',
        }),
        checkbox_label: props => ({
            color: themes[props.theme].text,
        }),
    }
);
