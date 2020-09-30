var rotate = require("./rotate");


function get180Dict(spans) {
    const spans180 = {}
    for (var angle of Object.keys(spans)) {
        spans180[rotate(angle, 180)] = spans[angle]
    }
    return spans180;
}


if (require.main === module) {
        const spans = {
            "90d" :false,
            "45d" :true,
            "0d"  :false,
            "315d":false,
            "270d":true,
            "225d":true,
            "180d":true,
            "135d":false
        }
    console.log(get180Dict(spans))
}