import makeStyles from "@material-ui/core/styles/makeStyles";
import {imgFillDiv} from "../../styles/imgFillDiv.jss";
import {themes} from "../../styles/themes.jss";
import {getDrawerFontSize} from "../../PieceProfiles/ProfileWB/ProfileWB.jss";

export const useStyles = makeStyles({
    piece: {
        cursor: 'pointer',
        zIndex: 'inherit',
        ...imgFillDiv,
    },
    piece_header: props => ({
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignItems: 'center',
        justifyContent: 'flex-start',
    }),
    piece_name: props => ({
        color: themes[props.theme].text,
        fontFamily: 'Roboto-Light, Roboto',
        textAlign: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        transform: 'translate(-0.65em, 0)',
    }),
    icon_button: props => ({
        height: '1em',
        width: '1em',
    }),
    icon: props => ({
        color: themes[props.theme].text,

    }),
}, {index: 1});