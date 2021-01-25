import {makeStyles} from "@material-ui/core/styles";
import {widths} from "../PieceProfiles/Header/CustomizeHeader.jss";
import {fontSizes} from "../PieceProfiles/PieceProfiles.jss";

export const useStyles = makeStyles({
    divider: props => ({
        '@media screen and (min-width: 768px)': {
            fontSize: fontSizes.desktop,
            width: widths.desktop,
        },
        '@media screen and (max-width: 767px)': {
            fontSize: fontSizes.mobile,
            width: widths.mobile,
        },
    }),
});