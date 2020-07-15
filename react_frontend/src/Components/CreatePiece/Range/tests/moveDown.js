let aboveView = [1, 
                 2, 
                 3];

let inView =   [4, 
                5, 
                6];

let belowView = [7, 
                 8, 
                 9];

function moveDown() {
    let firstAbove = aboveView.pop();
    inView.unshift(firstAbove);
    let lastIn = inView.pop();
    belowView.unshift(lastIn);
}

if (require.main === module) {
    moveDown();
    console.log(aboveView);
    console.log(inView);
    console.log(belowView);
}