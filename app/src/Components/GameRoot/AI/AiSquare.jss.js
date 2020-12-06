import { makeStyles } from "@material-ui/core/styles";
import {getPosPercentVal} from "../../helpers/getPosPercentVal";
import {rfToGridLoc} from "../../helpers/crdCnvrt";

const square = (rf) => ({
    ...rfToGridLoc(rf),
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
