export function isHref(str) {
    /**function to determine if str is hyperlink */
    if (str.match('((https|http)?:\/\/[^\s]+)'))
        return true
    else
        return false
}