import {makeStyles} from "@material-ui/core/styles";
import {fontSizes} from "../PieceProfiles/ProfileWB.jss";
import {widths} from "../PieceProfiles/Header/CustomizeHeader.jss";

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