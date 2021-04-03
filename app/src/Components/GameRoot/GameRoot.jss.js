import { makeStyles } from "@material-ui/core/styles";
import {miniVariantIconsColumnWidth} from "../Reuseables/Drawers/MiniVariantDrawer.jss";

export const styles = {
    game_root_body: {
        backgroundImage: 'url("/Images/Backgrounds/background.png")',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center center'
    },
    sqr_text_checkbox: props => ({
        marginLeft: 0,
        flexDirection: 'row-reverse',
    }),
}

export const useStyles = makeStyles({
    modal: props => ({
        position: 'absolute',
        left: 0,
        top: 0,
        zIndex: 20,
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        width: `calc(100vw - ${miniVariantIconsColumnWidth}px)`,
        backgroundColor: 'rgba(255, 0, 0, 0.15)',

    }),
}, {index: 1});