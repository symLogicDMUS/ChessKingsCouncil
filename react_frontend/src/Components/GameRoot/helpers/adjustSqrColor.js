export function adjustSqrColor(sqrColor, canDrop) {

    if (sqrColor === "sqr1" && canDrop)
       return "sqr1-in-range"
    
    if (sqrColor === "sqr2" && canDrop)
      return "sqr2-in-range"

    return sqrColor
}