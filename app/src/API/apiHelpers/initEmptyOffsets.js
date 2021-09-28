export function initEmptyOffsets(defs) {
    /* **/
    for (const pieceName of Object.keys(defs)) {
        for (const color of ["W", "B"]) {
            if (!Object.keys(defs[pieceName][color]).includes("offsets")) {
                defs[pieceName][color]["offsets"] = [];
            }
        }
    }
    return defs;
}

// module.exports = initEmptyOffsets;
