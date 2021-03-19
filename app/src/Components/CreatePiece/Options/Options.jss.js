import makeStyles from "@material-ui/core/styles/makeStyles";
import {fontSize00184} from "../../styles/fontSizes.jss";

export const useStyles = makeStyles({
    options_tool: (props) => ({
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        /*desktop*/
        '@media screen and (min-width: 1040px)': {
            fontSize: fontSize00184,
        },
    }),
}, {index: 1});
