function isHref(str) {
    /**function to determine if str is hyperlink */
    if (str.match('((https|http)?:\/\/[^\s]+)'))
        return true
    else
        return false
}

if (require.main === module) {
    console.log(isHref("https://github.com/symLogicDMUS"))
    console.log(isHref("https://www.chess.com/learn-how-to-play-chess"));
    console.log(isHref("/"));
    console.log(isHref("/NewGame"));
    console.log(isHref("/LoadGame"));
    console.log(isHref("/CreatePiece"));
    console.log(isHref("/CouncilRules"));
}

// (https?:\/\/[^\s]+)
// (http|ftp|https)://(www.)*[a-zA-Z0-9]+.com/([a-zA-Z0-9]|-)+