var rotate =  require("./rotate");


function getRotations(spans, theta) {
    spans = spans.map(angle => rotate(angle, theta))    
    return spans
}


module.exports = getRotations;


if (require.main === module) {

    const spans = [
        "90d" ,
        "45d" ,
        "0d"  ,
        "315d",
        "270d",
        "225d",
        "180d",
        "135d"
    ]

    console.log(getRotations(spans, 180))
}