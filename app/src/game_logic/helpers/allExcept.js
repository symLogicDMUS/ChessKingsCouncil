
export function allExcept(list, value) {
    /**return all the elements in the list except for value */
    const newList = [];
    for (const el of list) {
        if (el !== value)
            newList.push(el)
    }
    return newList;
}

// module.exports = allExcept;