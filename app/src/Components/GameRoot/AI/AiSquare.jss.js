import { makeStyles } from "@material-ui/core/styles";
import {getLeftAndTopPos} from "../../helpers/getLeftAndTopPos";

const square = (rf) => ({
    position: "absolute",
    width: "12.5%",
    height: "12.5%",
    ...getLeftAndTopPos(rf),
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
})

export const useStyles = makeStyles({
    ai_start: props =>  ({
        ...square(props.rf),
        backgroundImage: 'url("/Images/sqr/sqr-outline-fdfd35.svg")',
    }),
    ai_dest: props => ({
        ...square(props.rf),
        backgroundImage: 'url("/Images/sqr/sqr-highlight-fdfd35.svg")',
    }),
    none: props => ({
        ...square(props.rf),
    })
});
