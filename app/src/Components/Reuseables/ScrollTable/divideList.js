export function divideList(listItems, numRows) {
    let aboveView = [];
    let inView = [];
    let belowView = [];
    let remaining = 0;
    if (listItems.length > numRows) {
        remaining = listItems.length - numRows;
        let lenTop = Math.floor(remaining / 2);
        for (let i = 0; i < lenTop; i++) {
            aboveView.push(listItems[i]);
        }
        let current = lenTop;
        for (let i = 0; i < numRows; i++) {
            inView.push(listItems[current]);
            current++;
        }
        for (let i = current; i < listItems.length; i++) {
            belowView.push(listItems[i]);
        }
    } else inView = listItems;
    return {aboveView: aboveView, inView: inView, belowView: belowView}
}