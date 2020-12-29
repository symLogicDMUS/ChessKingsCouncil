import {makeStyles} from "@material-ui/core/styles";
import {themes} from "../styles/themes.jss";
import {availHeight, availWidth} from "../helpers/windowMeasurments";

export const useStyles = makeStyles({
    main_menu: props => ({
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'no-wrap',
        alignItems: 'center',
        justifyContent: 'center',
    }),
    title: props => ({
        fontSize: props.fontSize,
        width: availWidth() * 0.7,
        height: availHeight()*0.3523,
    }),
});