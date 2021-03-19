import {makeStyles} from "@material-ui/core/styles";
import {themes} from "../../styles/themes.jss";

export const useStyles = makeStyles({
    tool_buttons: props => ({
        width: '100vw',
        padding: '1vw',
        // margin: '0.8vw',
        zIndex: 7,
        transform: 'translate(0, -0.8em)',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        border: `0.075rem solid ${themes[props.theme].outline}`,
        backgroundColor: themes[props.theme].fill,
        ...props.style,
    }),
}, {index: 1});