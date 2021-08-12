export function containsInvalidCharacters(string) {
    const invalids = [".", "#", "$", "[", "]"];
    for (let c of string) {
        if (invalids.includes(c)) {
            return true;
        }
    }
    return false;
}
