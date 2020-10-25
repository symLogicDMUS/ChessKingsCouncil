export const initWidth = 1536; //width screen used in design
export const initHeight = 754; //height screen used in design
export const yMult = window.screen.availHeight / initHeight;
export const xMult = window.screen.availWidth / initWidth;

export function computeY(pxVal) {
    return `${yMult * pxVal}px`;
}

export function computeX(pxVal) {
    return `${xMult * pxVal}px`;
}

export function gw(colWidth) {
    /**get grid width */
    return colWidth * xMult;
}