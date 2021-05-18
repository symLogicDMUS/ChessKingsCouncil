import { makeStyles } from "@material-ui/core/styles";
import {mui_input} from "../Input.jss";

export const useStyles = makeStyles({
    pick_type: props => ({
        "@media screen and (max-width:  600px)":{
            width: '82.5vw',
        },
        '@media screen and (min-width: 600px) and (max-width: 912px)': {
            width: '50vw'
        },
        '@media screen and (min-width: 912px) and (max-width: 960px)': {
            width: '35vw',
        },
        '@media screen and (min-width: 960px)': {
            width: '30vw',
        },
        margin: 'auto',
        ...mui_input(props.theme),
    }),
    game_types: props => ({
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignItems: 'flex-start',
        justifyContent: 'center',
        width: '75%',
    }),
    game_types_divider: props => ({
        width: '5%',
    }),
}, {index: 1});