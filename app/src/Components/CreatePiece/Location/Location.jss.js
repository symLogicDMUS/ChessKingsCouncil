import makeStyles from "@material-ui/core/styles/makeStyles";
import {buttonSize, fourItemMargins, tool_flexbox, tool_title} from "../CreatePiece.jss";

export const useStyles = makeStyles({
    location_tool: (props) => ({
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        '@media screen and (max-device-width: 767px) and (max-aspect-ratio: 6/10)': {
            width: buttonSize.ipx*2 + fourItemMargins.ipx*2.5,
            height: buttonSize.ipx*2 + fourItemMargins.ipx*2.5,
        },
        "@media screen and (max-device-width: 767px) and  (min-aspect-ratio: 1/2) and (max-aspect-ratio: 1/1)": {
            width: '100%',
        },
        '@media screen and (min-device-width: 768px) and (max-device-width: 1080px) and (max-aspect-ratio: 1/1)': {
            width: buttonSize.ipad*2 + fourItemMargins.ipad*3,
            height: buttonSize.ipad*2 + fourItemMargins.ipad*3,
        },
        '@media screen and (min-device-width: 992px) and (min-aspect-ratio: 1/1)': {
            ...tool_flexbox,
        },
    }),
    title: props => ({
        ...tool_title(props.theme),
    }),
});
