import { makeStyles } from "@material-ui/core/styles";


export const useStyles = makeStyles({
    piece: props => ({
        cursor: 'grab',
        width: props.sqrSize * 0.95,
        height: props.sqrSize * 0.95,
        textAlign: 'center',
        verticalAlign: 'center'
    }),
}, {index: 1});