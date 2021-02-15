import {makeStyles} from "@material-ui/core/styles";
import {themes} from "../styles/themes.jss";
import {availHeight, availWidth} from "../helpers/windowMeasurments";
import {fontSize002} from "../styles/fontSizes.jss";

export const useStyles = makeStyles({
    main_menu: props => ({
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'no-wrap',
        alignItems: 'flex-start',
        justifyContent: 'center',
        height: availHeight() * 0.85,
        width: availWidth() * 0.61,
        margin: 'auto'
    }),
    title: props => ({
        fontSize: fontSize002,
        width: availWidth() * 0.6,
        height: availHeight()*0.3,
        marginBottom: '2em'
    }),
});