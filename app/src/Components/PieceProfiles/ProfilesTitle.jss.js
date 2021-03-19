import makeStyles from "@material-ui/core/styles/makeStyles";
import {availWidth} from "../helpers/windowMeasurments";
import {themes} from "../styles/themes.jss";
import {fontSize002} from "../styles/fontSizes.jss";

export const getWidth = (screenCase) => ({

});
export const useStyles = makeStyles({
    title_bar: props => ({
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'no-wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        '@media screen and (max-width: 1040px)': {
            fontSize: fontSize002,
            width: '95%',
            marginLeft: '2.5%',
        },
        '@media screen and (min-width: 1040px)': {
            fontSize: fontSize002,
            width: availWidth() * 0.4625,
            marginLeft: '3.25%',
        },
        marginBottom: '0.25em',
        color: themes[props.theme].text,
        borderBottom: `0.05em solid ${themes[props.theme].outline}`,
    }),
    title: props => ({
       fontSize: fontSize002
    }),
}, {index: 1});