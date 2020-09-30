
function getSpan(step_func) {

    const reInt = /([0-9]+)d/;
    let integer = Number(step_func.match(reInt)[1]);
    let span = null;
    switch(integer) {
        case 0:
            span = "right, "
            break;
        case 45:
            span = "upper-right, "
            break;
        case 90:
            span = "up, "
            break;
        case 135:
            span = "upper-left, "
            break;
        case 180:
            span = "left, "
            break;
        case 225:
            span = "lower-left, "
            break;
        case 270:
            span = "down, "
            break;
        case 315:
            span = "lower-right, "
            break;
        default:
            console.log("no match");
            break;
    }

    return span;

}

exports.getSpan = getSpan;

if (require.main === module) {
    console.log(getSpan("step_1sqr180d"))
}