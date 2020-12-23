import {board} from "../../Reuseables/Board.jss";

export const styles = {
    displayBoard : props => ({
        ...board(props.fontSize),
    }),
}