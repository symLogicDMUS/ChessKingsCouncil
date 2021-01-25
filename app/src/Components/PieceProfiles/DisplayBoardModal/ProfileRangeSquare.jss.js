import {makeStyles} from "@material-ui/core/styles";
import {fontSizes} from "../PieceProfiles.jss";
import {sqrSize} from "./ProfileRange.jss";
import {themes} from "../../styles/themes.jss";

export const square = () => ({
    '@media screen and (min-width: 768px)': {
        fontSize: fontSizes.desktop,
        width: sqrSize.desktop,
        height: sqrSize.desktop
    },
    '@media screen and (max-width: 767px)': {
        fontSize: fontSizes.mobile,
        width: sqrSize.mobile,
        height: sqrSize.mobile,
    },
})

export const useStyles = makeStyles({
    span: props => ({
        ...square(),
        backgroundColor: themes[props.theme].span,
    }),
    offset: props => ({
        ...square(),
        backgroundColor: themes[props.theme].offset,
    }),
    light_normal: props => ({
        ...square(),
        backgroundColor: themes[props.theme].even_row,
    }),
    dark_normal: props => ({
        ...square(),
        backgroundColor: themes[props.theme].odd_row,
    }),
});