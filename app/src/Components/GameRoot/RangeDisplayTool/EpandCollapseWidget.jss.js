import makeStyles from "@material-ui/core/styles/makeStyles";
import {imgFillDiv} from "../../Reuseables/imgFillDiv.jss";

export const useStyles = makeStyles({
    widget: {
        "@media screen and (min-device-width: 768px)": {
            position: 'absolute',
            width: '12%',
            height: '12%',
            left: '80%',
            top: '2%'
        },
    },
    image: {
        ...imgFillDiv
    }
})