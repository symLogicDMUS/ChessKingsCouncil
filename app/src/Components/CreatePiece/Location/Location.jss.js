import makeStyles from "@material-ui/core/styles/makeStyles";
import {availHeight, availWidth, innerHeight} from "../../helpers/windowMeasurments";
import {tool_title, tool_flexbox, toolWidth} from "../CreatePiece.jss";
import {appBarHeight} from "../../Reuseables/PersistentDrawer.jss";
import {fontSizes} from "../Board/CreatePieceBoard.jss";

export const locationToolWidth = () => toolWidth(); //change later
export const locationToolHeight = () => availHeight() * 0.095
export const locationToolTop = () => availHeight() * 0.67;
export const locationToolLeft = () => availWidth() * 0.57;

export const margins = {
    ipx: availWidth() * 0.04,
    mobile: availWidth() * 0.035,
    ipad: availWidth()*0.02,
}

export const buttonSize = {
    ipx: (innerHeight() - (appBarHeight + fontSizes.ipx*8 + ((innerHeight() - (appBarHeight + fontSizes.ipx*8))*0.95*0.2) + margins.ipx*3))*0.5,
    mobile: (innerHeight() - (appBarHeight + fontSizes.mobile*8 + ((innerHeight() - (appBarHeight + fontSizes.mobile*8))*0.95*0.2) + margins.mobile*3))*0.5,
    ipad: (innerHeight() - (appBarHeight + fontSizes.ipad*8 + ((innerHeight() - (appBarHeight + fontSizes.ipad*8))*0.95*0.2) + margins.ipad*3))*0.5,
    short: availWidth() * 0.145,
}

export const useStyles = makeStyles({
    location_tool: (props) => ({
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        '@media screen and (max-device-width: 767px) and (max-aspect-ratio: 6/10)': {
            width: buttonSize.ipx*2 + margins.ipx*2.5,
            height: buttonSize.ipx*2 + margins.ipx*2.5,
        },
        "@media screen and (max-device-width: 767px) and  (min-aspect-ratio: 1/2) and (max-aspect-ratio: 1/1)": {
            width: '100%',
        },
        '@media screen and (min-device-width: 768px) and (max-device-width: 1080px) and (max-aspect-ratio: 1/1)': {
            width: buttonSize.ipad*2 + margins.ipad*3,
            height: buttonSize.ipad*2 + margins.ipad*3,
        },
        '@media screen and (min-device-width: 992px) and (min-aspect-ratio: 1/1)': {
            ...tool_flexbox,
        },
    }),
    title: props => ({
        ...tool_title(props.theme),
    }),
});
