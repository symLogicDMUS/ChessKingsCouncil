import {makeStyles} from "@material-ui/core/styles";
import {themes} from "../styles/themes.jss";
import {availHeight, availWidth} from "../helpers/windowMeasurments";
import {fontSize002} from "../styles/fontSizes.jss";

export const useStyles = makeStyles({
    main_menu: props => ({
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'no-wrap',
        alignItems: 'center',
        justifyContent: 'center',
        height: availHeight() * 0.95,
    }),
    title: props => ({
        fontSize: fontSize002,
        width: availWidth() * 0.7,
        height: availHeight()*0.3523,
        marginBottom: '2em'
    }),
});