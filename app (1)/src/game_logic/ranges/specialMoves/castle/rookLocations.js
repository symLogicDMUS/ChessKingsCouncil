// let key equal starting location of king, let value = starting location of rook
export const rookLocations =
{
    "e1":["a1", "h1"],
    "e8":["a8", "h8"]
}
Object.preventExtensions(rookLocations);
Object.seal(rookLocations);
Object.freeze(rookLocations);
// module.exports = rookLocations;