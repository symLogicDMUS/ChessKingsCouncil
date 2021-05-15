import {makeStyles} from "@material-ui/core/styles";
import {miniVariantIconsColumnWidth} from "../../Reuseables/Drawers/MiniVariantDrawer.jss";
import {z} from "../../Reuseables/Drawers/ResponsiveDrawer.jss";

export const marginLeft = {
    marginLeft: 'auto',
}

export const useStyles = makeStyles({
    appBar: props => ({
        width: '100%',
        display: 'flex',
        alignItems: 'center',
    }),
    piece_name_bar: props => ({
        zIndex: z - 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: `calc(100vw - ${miniVariantIconsColumnWidth}px)`,
        position: 'fixed',
        left: 0,
    }),
    piece_name: props => ({
        width: '40%',
        textAlign: 'center',
    }),
    sign_out: props => ({
        marginLeft: 'auto',
    }),
}, {index: 1});
