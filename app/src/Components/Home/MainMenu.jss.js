import {makeStyles} from "@material-ui/core/styles";
import {availHeight, availWidth} from "../helpers/windowMeasurments";

export const page_name = (fontSize) => ({
    fontSize: fontSize * 2,
    width: availWidth() * 0.078,
    height: (availHeight() * 0.236 - availWidth() * 0.078) * 0.5,
    fontFamily: 'Garamond',
    textAlign: 'center',
    lineHeight: '1.2em',
});

export const useStyles = makeStyles({
    main_menu: props => ({
        width: '100%',
        height: availHeight(),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    }),
    title: props => ({
        width: availWidth() * 0.85625,
    }),
    page_links: props => ({
        fontSize: props.fontSize,
        width: '66.25%',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'no-wrap',
        justifyContent: 'space-between',
    }),
    top: props => ({
        position: 'fixed',
        width: '99%',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'no-wrap',
        alignItems: 'center',
        justifyContent: 'flex-end',
    }),
});