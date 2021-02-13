import {makeStyles} from "@material-ui/core/styles";
import {widths} from "../PieceProfiles/Header/CustomizeHeader.jss";
import {fontSizes} from "../PieceProfiles/PieceProfiles.jss";

export const useStyles = makeStyles({
    divider: props => ({
        '@media (min-aspect-ratio: 1001/1000)': {
            fontSize: fontSizes.desktop,
            width: widths.desktop,
        },
        '@media (max-aspect-ratio: 1/1)': {
            fontSize: fontSizes.mobile,
            width: widths.mobile,
        },
    }),
});