import { makeStyles } from "@material-ui/core/styles";
import {getTextWidth} from "../helpers/getTextWidth.jss";

// em units
const titleWidth = 15;

export const button = (fontSize) => ({
    fontSize: fontSize,
    width: '45%',
    height: '2em',
});

export const dropdown = (fontSize) => ({
    fontSize: fontSize,
    width: getTextWidth('Load Game', fontSize * 8, 'Garamond'),
    height: '2em',
});
export const useStyles = makeStyles({
    flexbox: props => ({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '8em'
    }),
    content: props => ({
        fontSize: props.fontSize,
        width: '50em',
        height: '25em',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'space-evenly',
    }),
    title: props => ({
        fontSize: props.fontSize * 8,
        fontFamily: 'Garamond',
        width: '100%',
        lineHeight: '70%',
        textAlign: 'center',
    }),
    buttons: props => ({
        fontSize: props.fontSize,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: getTextWidth('Load Game', props.fontSize * 8, 'Garamond'),
    }),

});