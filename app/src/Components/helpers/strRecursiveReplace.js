export function strRecursiveReplace(str, find, replace) {
    str = str.replace(find, replace);
    if (str.includes(find)) {
        str = strRecursiveReplace(str, find, replace);
    }
    return str;
}
