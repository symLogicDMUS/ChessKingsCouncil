import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles({
    content: props => ({
        padding: 0,
        width: '85vw',
        display: 'flex',
        flexDirection: 'column',
        height: 'calc(100vh - 15vw)',
        borderBottom: 'red',
    }),
}, {index: 1});