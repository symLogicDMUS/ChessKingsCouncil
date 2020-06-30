let rotate = require("./rotate");

function getRotations(spans, theta) {

    spans = spans.map(angle => rotate(angle, theta))

    spans = spans.map(angle => {

        if (angle >= 360)
            angle = angle - 360

        return angle
    })

    spans = spans.map(angle => `${angle}d`)
    
    return spans
}

if (require.main === module) {
    let spans = ["180d", "0d"]
    console.log(getRotations(spans, 180))
    console.log("")
}