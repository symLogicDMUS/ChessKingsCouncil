const mapListXyToRf = require("./mapListXyToRf");


function mapListListXyToRf(nestedList) {
    var newNestedList = []
    for (var list of nestedList) {
        newNestedList.push(mapListXyToRf(list))
    }
    return newNestedList;
}

module.exports = mapListListXyToRf;