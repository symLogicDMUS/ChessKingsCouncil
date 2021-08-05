import { makeStyles } from "@material-ui/core/styles";
import {mui_input} from "../Input.jss";

const widthQueries = {
    "@media screen and (max-width: 600px)":{
        width: '82.5vw',
    },
    '@media screen and (min-width: 600px) and (max-width: 912px)': {
        width: '60vw',
    },
    '@media screen and (min-width: 912px) and (max-width: 960px)': {
        width: '40vw',
    },
    '@media screen and (min-width: 960px)': {
        width: '35vw',
    },
}

export const useStyles = makeStyles({
    root: props => ({
        margin: 'auto',
        ...widthQueries,
    }),

    game_name: props => ({
        ...widthQueries,
        ...mui_input(props.theme),
        backgroundColor: '#fff',
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
    }),
}, {index: 1});