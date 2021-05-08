import {makeStyles} from "@material-ui/core/styles";
import {miniVariantIconsColumnWidth} from "../Reuseables/Drawers/MiniVariantDrawer.jss";

export const marginLeft = {
    marginLeft: 'auto',
}

export const useStyles = makeStyles({
    appBar: props => ({
        width: '100%',
       display: 'flex',
       alignItems: 'center',
    }),
    piece_name: props => ({
        textAlign: 'center',
        position: 'fixed',
        left: 0,
        fontSize: '1rem',
        width: `calc(100vw - ${miniVariantIconsColumnWidth}px)`,
    }),
    sign_out: props => ({
        marginLeft: 'auto',
    }),
}, {index: 1});
