import { makeStyles } from "@material-ui/core/styles";
import {miniVariantIconsColumnWidth} from "../Reuseables/Drawers/MiniVariantDrawer.jss";
import {themes} from "../styles/themes.jss";

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
    title: props => ({
        fontSize: '2.25vh',
        letterSpacing: '0.0075em',
        marginLeft: 24,
        marginRight: 24,
        fontFamily: 'Roboto", "Helvetica", "Arial", sans-serif',
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
        backgroundColor: 'rgba(0, 0, 0, 0)',
    }),
}, {index: 1});

export const textColor = (theme) => ({
    color: themes[theme].text
});