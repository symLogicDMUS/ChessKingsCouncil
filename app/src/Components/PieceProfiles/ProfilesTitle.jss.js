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
        '@media (min-aspect-ratio: 16/9)': {
            width: availWidth() * 0.4625,
            marginLeft: '3.25%',
        },
        '@media (max-aspect-ratio: 1/1)': {
            width: '100%',
            marginLeft: '3.75%',
        },
        color: themes[props.theme].text,
        marginBottom: '0.25em',
        borderBottom: `0.05em solid ${themes[props.theme].outline}`,
    }),
    title: props => ({
       fontSize: fontSize002
    }),
});