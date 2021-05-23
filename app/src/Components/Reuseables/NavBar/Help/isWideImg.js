export function isWideImg(src) {
    const res = src.search('/wide/')
    return res !== -1;
}