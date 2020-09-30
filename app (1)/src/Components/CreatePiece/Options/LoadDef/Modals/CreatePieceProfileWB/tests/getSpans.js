let getSpan = require("./getSpan");

function getSpans() {
    let spanStrings = []
    for (var span of _spans) {
        spanStrings.push(getSpan.getSpan(span))
    }
    return spanStrings;
}

let _spans = [
    "step_1sqr180d",
    "step_1sqr225d",
    "step_1sqr270d",
    "step_1sqr315d",
    "step_1sqr0d",
    "step_1sqr90d",
    "step_1sqr45d",
    "step_1sqr135d"
];
if (require.main === module) {
    console.log(getSpans())
}