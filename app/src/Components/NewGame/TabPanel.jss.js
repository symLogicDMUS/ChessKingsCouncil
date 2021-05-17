import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles({
    content: props => ({
        width: '85vw',
        display: 'flex',
        flexDirection: 'column',
        height: 'calc(100vh - 15vw)',
    }),
}, {index: 1});