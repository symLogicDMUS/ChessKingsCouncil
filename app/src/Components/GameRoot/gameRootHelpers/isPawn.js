
export function isPawn(id) {
    if (id.match(`^(W|B)P[1-9]$`) != null) 
        return true
    else 
        return false
}