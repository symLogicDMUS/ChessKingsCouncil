import {fontSize0040} from "../../styles/fontSizes.jss";
import {useStyles} from "../../Reuseables/Square.jss";

export function PartialRangeSquare({onClick, theme, rangeType, isHighlight, isLightSqr, children}) {
    const classes = useStyles({theme: theme, fontSize: fontSize0040, type: 'normal'});
    return (
        <div onClick={onClick}
             className={isHighlight ? (rangeType === 'span' ? classes.span : classes.offset)
                 : (isLightSqr ? classes.light_normal : classes.dark_normal)}
        >
            {children}
        </div>
    )
}