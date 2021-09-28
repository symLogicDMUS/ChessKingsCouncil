import { lighten, makeStyles } from "@material-ui/core/styles";
import { themes } from "../../styles/themes/themes.jss";
import { rfToGridLoc } from "../../helpers/crdCnvrt";
import { binaryBoard } from "../../helpers/binaryBoard";

const opacityValue = "00";

export const pieceLocHover = (theme) => ({
    backgroundColor: lighten(themes[theme].dark_in_range, 0.08),
});

export const useStyles = makeStyles(
    {
        square: (props) => ({
            "@media screen and (max-width: 360px)": {
                width: "10vw",
                height: "10vw",
            },
            "@media screen and (min-width: 360px) and (max-width: 960px)": {
                width: "10.5vw",
                height: "10.5vw",
            },
            "@media screen and (min-width: 960px)": {
                width: "5.3125vw",
                height: "5.3125vw",
            },
            "& .MuiTouchRipple-root": {
                color: themes[props.theme].sqr_text,
            },
            maxWidth: "11vh",
            maxHeight: "11vh",
            minWidth: "unset",
            minHeight: "unset",
            ...rfToGridLoc(props.rf),
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            alignContent: "center",
            borderRadius: 0,
            padding: 0,
            backdropFilter: props.theme === "blue" ? "blur(2px)" : "unset",
        }),
        range: (props) => ({
            backgroundColor: binaryBoard[props.rf]
                ? themes[props.theme].light_normal + opacityValue
                : themes[props.theme].dark_normal + opacityValue,
        }),
    },
    { index: 1 }
);
/**
 * see ChessKingsCouncil/app/src/Reuseables/Square.jss for other
 * */
