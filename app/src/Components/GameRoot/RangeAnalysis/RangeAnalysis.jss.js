import {themes} from "../../styles/themes/themes.jss";
import makeStyles from "@material-ui/core/styles/makeStyles";

export const sqrSize = {
    wide: '2.8vw',
    thin: '10.5vw',
}

export const useStyles = makeStyles({
        board_tool: props => ({
            display: 'flex',
            justifyContent: 'center',
            '@media screen and (max-width: 960px)': {
                flexDirection: 'row',
                flex: 'nowrap',
                width: '100%',
                alignItems: 'center',
            },
            '@media screen and (min-width: 960px)': {
                flexDirection: 'row',
                flexWrap: 'wrap',
                marginBottom: '1vw',
            },
        }),
        flex_header: props => ({
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            '@media screen and (max-width: 960px)': {
                flexGrow: 10,
            },
            '@media screen and (min-width: 960px)': {
                height: '3.5vh',
                width: '22.4vw',
                outline: `0.05rem solid ${themes[props.theme].outline}`,
            },
        }),
        title: props => ({
            fontSize: '2.19vh',
            height: '1em',
            lineHeight: '0.96em',
            fontFamily: 'Roboto-Light, Roboto',
            color: themes[props.theme].text,
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
