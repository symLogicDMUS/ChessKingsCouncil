let aboveView = [1, 
                 2, 
                 3];

let inView =    [4, 
                 5, 
                 6];

let belowView = [7, 
                 8, 
                 9];

function moveUp() {
    let firstIn = inView.shift();
    aboveView.push(firstIn);
    let firstBelow = belowView.shift();
    inView.push(firstBelow);
}

if (require.main === module) {
    moveUp();
    console.log(aboveView);
    console.log(inView);
    console.log(belowView);
}