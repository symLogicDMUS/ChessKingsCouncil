import {makeStyles} from "@material-ui/core/styles"

export const useStyles = makeStyles({
    piece: props => ({
        // position: 'absolute',
        zIndex: '1',
        width: '95%',
        height: '95%',
        margin: '2.5%'
    })
});