export function isSpace(char) {
    let whitespaces = [" ", "   ", "\n", "\s"]
    if (whitespaces.includes(char))
        return true
    else
        return false
}
