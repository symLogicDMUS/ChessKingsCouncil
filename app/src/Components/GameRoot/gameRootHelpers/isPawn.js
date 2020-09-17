
export function isPawn(id_) {
    if (id_.match(`^(W|B)P[1-9]$`) != null) 
        return true
    else 
        return false
}