import {fontSize0040} from "../../styles/fontSizes.jss";
import {useStyles} from "../../Reuseables/Square.jss";
import {fontSizes} from "./PartialRangeModal.jss";

export function PartialRangeSquare({onClick, theme, rangeType, isHighlight, isLightSqr, screenCase, children}) {
    const classes = useStyles({theme: theme, fontSize: fontSizes[screenCase], type: 'normal'});
    return (
        <div onClick={onClick}
             className={isHighlight ? (rangeType === 'span' ? classes.span : classes.offset)
                 : (isLightSqr ? classes.light_normal : classes.dark_normal)}
        >
            {children}
        </div>
    )
}