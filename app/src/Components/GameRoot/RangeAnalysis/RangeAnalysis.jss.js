import {themes} from "../../styles/themes/themes.jss";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {lgScreenItemWidth, marginBottom} from "../GameRoot.jss";

export const useStyles = makeStyles({
        board_tool: props => ({
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'row',
            flexWrap: 'wrap',
            marginBottom: marginBottom,
            width: lgScreenItemWidth,
        }),
        title: props => ({
            color: themes[props.theme].text,
            fontFamily: 'Roboto-Light, Roboto',
            outline: `0.05rem solid ${themes[props.theme].outline}`,
            width: '100%',
            fontSize: '1rem',
            padding: '0.5rem',
            minWidth: 'unset',
            textAlign: 'center',
            lineHeight: '0.96em',
        }),
        checkbox_container: props => ({
            flexGrow: 10,
            display: 'inline-flex',
            flexDirection: 'row',
            flexWrap: 'nowrap',
            alignItems: 'center',
            justifyContent: 'center',
        }),
        checkbox: props => ({
            color: themes[props.theme].text,
            fontSize: '2vh',
            height: '1.5em',
            width: '1.5em',
        }),
        checkbox_label: props => ({
            color: themes[props.theme].text,
        }),
    }
);
