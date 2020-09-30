
export function isPawn(id) {
    if (id.match(/(W|B)P[1-9]/g) != null) {
        return true
    }
    else {
        return false
    }
}