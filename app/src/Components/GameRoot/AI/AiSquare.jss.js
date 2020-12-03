import { makeStyles } from "@material-ui/core/styles";
import {getPosPercentVal} from "../../helpers/getPosPercentVal";

const square = (rf) => ({
    position: "absolute",
    width: "12.5%",
    height: "12.5%",
    ...getPosPercentVal(rf),
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
