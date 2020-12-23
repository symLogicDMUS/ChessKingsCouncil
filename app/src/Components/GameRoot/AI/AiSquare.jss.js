import { makeStyles } from "@material-ui/core/styles";
import {square} from "../../Reuseables/Square.jss";

const aiSquare = (fontSize) => ({
    ...square(fontSize),
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
})

export const useStyles = makeStyles({
    ai_start: props =>  ({
        ...aiSquare(props.fontSize),
        backgroundImage: 'url("/Images/sqr/sqr-outline-fdfd35.svg")',
    }),
    ai_dest: props => ({
        ...aiSquare(props.fontSize),
        backgroundImage: 'url("/Images/sqr/sqr-highlight-fdfd35.svg")',
    }),
    none: props => ({
        ...aiSquare(props.fontSize),
    })
});