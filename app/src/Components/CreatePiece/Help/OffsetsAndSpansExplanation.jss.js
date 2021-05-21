import {makeStyles} from "@material-ui/core/styles";
import {themes} from "../../styles/themes/themes.jss";
import {itemSizeLg, itemSizeSm} from "../../PieceProfiles/Help/ProfileHelpText.jss";

export const useStyles = makeStyles({
    black_mirror_image_example: props => ({
        float: 'left',
        marginRight: '0.5rem',
        display: 'flex',
        flexDirection: 'column',
    }),
    example: props => ({
        '@media screen and (max-width: 960px)': {
            width: itemSizeSm,
            height: itemSizeSm,
        },
        '@media screen and (min-width: 960px)': {
            width: itemSizeLg,
            height: itemSizeLg,
        },
        border: `0.05rem solid ${themes[props.theme].outline}`,
    }),
    example1: props => ({
        marginBottom: '0.5rem',
    }),
    example2: props => ({
       marginTop: '0.5rem',
    }),
}, {index: 1});