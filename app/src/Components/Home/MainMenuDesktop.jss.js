import {makeStyles} from "@material-ui/core/styles";
import {availHeight, availWidth} from "../helpers/windowMeasurments";
import {fontSize002, fontSize00392} from "../styles/fontSizes.jss";

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
        width: availWidth() * 0.8,
    }),
    page_links: props => ({
        fontSize: fontSize00392,
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
    sign_out_button: props => ({
        fontSize: fontSize002,
    }),
    icon: props => ({
        fontSize: fontSize002,
    }),
});