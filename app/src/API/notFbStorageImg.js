export function notFbStorageImg(imgStr) {
    return ! imgStr.startsWith("https://");
}