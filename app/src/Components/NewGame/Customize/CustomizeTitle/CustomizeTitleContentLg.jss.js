import { makeStyles } from "@material-ui/core/styles";
import { themes } from "../../../styles/themes/themes.jss";
import { pieceProfilesLgWidth } from "../../../PieceProfiles/PieceProfiles.jss";
import { marginLg2x } from "../../../PieceProfiles/constants.jss";

export const useStyles = makeStyles(
    {
        content: (props) => ({
            display: "flex",
            flexDirection: "row",
            flexWrap: "nowrap",
            alignItems: "center",
            width: pieceProfilesLgWidth,
            padding: `0 ${marginLg2x}`,
            marginRight: "auto",
            marginLeft: "auto",
            "& .MuiSvgIcon-root": {
                color: themes[props.theme].text,
            },
        }),
    },
    { index: 1 }
);
