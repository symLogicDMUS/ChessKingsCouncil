import makeStyles from "@material-ui/core/styles/makeStyles";
import {buttonSize, fourItemMargins, tool_flexbox, tool_title} from "../CreatePiece.jss";

export const useStyles = makeStyles({
    location_tool: (props) => ({
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        '@media screen and (min-device-width: 992px) and (min-aspect-ratio: 1/1)': {
            ...tool_flexbox,
        },
    }),
    title: props => ({
        ...tool_title(props.theme),
    }),
});
