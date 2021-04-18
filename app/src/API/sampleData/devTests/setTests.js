const sets = require("./setOps");

if (require.main === module) {
    console.log(Array.from(sets.difference(new Set([]), new Set([3, 4, 5]))))
}