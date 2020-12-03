import {makeStyles} from "@material-ui/core/styles"

export const useStyles = makeStyles({
    piece: props => ({
        cursor: 'pointer',
        zIndex: '1',
        width: '95%',
        height: '95%',
        margin: '2.5%'
    })
});