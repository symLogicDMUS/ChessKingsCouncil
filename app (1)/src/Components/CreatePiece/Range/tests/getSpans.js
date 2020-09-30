
const spans = {
    "90d" :false,
    "45d" :false,
    "0d"  :true,
    "315d":true,
    "270d":false,
    "225d":false,
    "180d":true,
    "135d":false
}
function getSpans() {
    let spans_ = []
    for (var angle of Object.keys(spans)) {
        if (spans[angle]) {
            spans_.push("step_1sqr" + angle);
        }
    }
    return spans_;
}

if (require.main === module) {
    console.log(getSpans())
}
