export function filterSamples(imgStrs) {
    return imgStrs.filter((str) => str.startsWith("https://"));
}
