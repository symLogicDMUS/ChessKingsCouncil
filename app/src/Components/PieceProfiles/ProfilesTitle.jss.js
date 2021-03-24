import makeStyles from "@material-ui/core/styles/makeStyles";
import {availWidth} from "../helpers/windowMeasurments";
import {themes} from "../styles/themes.jss";
import {fontSize002} from "../styles/fontSizes.jss";

export const useStyles = makeStyles({
    title_bar: props => ({
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'no-wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        '@media screen and (max-width: 1040px)': {
            width: '90vw',
            marginLeft: '5vw',
        },
        '@media screen and (min-width: 1040px)': {
            width: '46.25vw',
            marginLeft: '3.25%',
        },
        color: themes[props.theme].text,
        borderBottom: `0.05em solid ${themes[props.theme].outline}`,
    }),
    title: props => ({
       fontSize: fontSize002
    }),
}, {index: 1});