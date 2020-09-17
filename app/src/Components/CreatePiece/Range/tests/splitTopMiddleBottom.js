
let ranges = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
let aboveView = [];
let inView = [];
let belowView = [];
function splitTopMiddleBottom() {

    let remaining = 0;
    if (ranges.length > 5) {
        remaining = ranges.length - 5;
        let lenTop = Math.floor(remaining / 2);
        for (let i = 0; i < lenTop; i++) {
            aboveView.push(ranges[i])
        }
        let current = lenTop;
        for (let i = 0; i < 5; i++) {
            inView.push(ranges[current]);
            current++;
        }
        for (let i = current; i < ranges.length; i++) {
            belowView.push(ranges[i]);       
        }
    }
}

if (require.main === module) {
    splitTopMiddleBottom()
    console.log(aboveView);
    console.log(inView);
    console.log(belowView);
}