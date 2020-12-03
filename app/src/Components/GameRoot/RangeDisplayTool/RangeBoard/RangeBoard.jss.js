import makeStyles from "@material-ui/core/styles/makeStyles";
import {board} from "../../../Reuseables/BoardMixins.jss";


export const useStyles = makeStyles({
    board: {
        position: 'absolute',
        left: '10%',
        top: '12%',
        ...board('medium')
    },
})