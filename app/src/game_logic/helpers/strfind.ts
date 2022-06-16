export function strfind(list, b) {
    /**find if b as a string in in list when all element converted to string  */
    list = list.map((el) => JSON.stringify(el));
    return list.includes(JSON.stringify(b));
}

// module.exports = strfind;
