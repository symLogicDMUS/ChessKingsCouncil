import {board} from "../../Reuseables/boardMixin.jss";

export const styles = {
    interactive_board: {
        ...board,
        zIndex: 2,
    },
    display_board: {
        ...board,
        zIndex: 0,
        boxShadow: '0px 0px 25px white'
    }
}