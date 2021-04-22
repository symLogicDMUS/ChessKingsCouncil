const fs = require('fs');

const escapeChar = '|'

const urlToValidKeyChar = {
    '/': '||',
    '.': '|,',
    '#': '|@',
    '$': '|_',
    '[': '|<',
    ']': '|>',
}

const validKeyCharToUrl = {
    '||': '/',
    '|,': '.',
    '|@': '#',
    '|_': '$',
    '|<': '[',
    '|>': ']',
}

function strRecursiveReplace(str, find, replace) {
    str = str.replace(find, replace)
    if (str.includes(find)) {
        str = strRecursiveReplace(str, find, replace)
    }
    return str;
}

function mapUrlCharsToValidKeyChars(imgUrl) {
    for (const char of Object.keys(urlToValidKeyChar)) {
        imgUrl = strRecursiveReplace(imgUrl, char, urlToValidKeyChar[char])
    }
    return imgUrl;
}

function mapUrlListCharsToValidKeyChars(imgUrlList) {
    let newImgUrl;
    const newImgUrlList = []
    for (const imgUrl of imgUrlList) {
        newImgUrl = mapUrlCharsToValidKeyChars(imgUrl);
        newImgUrlList.push(newImgUrl)
    }
    return newImgUrlList;
}


if (require.main === module) {
    const sampleUrlList = [
        "https://firebasestorage.googleapis.com/v0/b/custom-chess.appspot.com/o/source%2Fsample%20images%2FOctocat-black.svg?alt=media&token=9d4d58e9-7a9b-41c3-9a65-1b7106a37c52",
        "https://firebasestorage.googleapis.com/v0/b/custom-chess.appspot.com/o/source%2Fsample%20images%2FOctocat-white.svg?alt=media&token=709ff90c-0125-4ee1-a328-8ea42a3904ef",
        "https://firebasestorage.googleapis.com/v0/b/custom-chess.appspot.com/o/source%2Fsample%20images%2Fdocker-red.svg?alt=media&token=ed16a508-7509-41fc-af3e-2a75e7343f16",
        "https://firebasestorage.googleapis.com/v0/b/custom-chess.appspot.com/o/source%2Fsample%20images%2Fdocker.svg?alt=media&token=ebdac6ad-c97d-41da-9c2b-d4f4810c420f",
        "https://firebasestorage.googleapis.com/v0/b/custom-chess.appspot.com/o/source%2Fsample%20images%2Fdragon-white.svg?alt=media&token=3e5a2970-e411-4190-a51a-ec40954beb86",
        "https://firebasestorage.googleapis.com/v0/b/custom-chess.appspot.com/o/source%2Fsample%20images%2Fdragon-black.svg?alt=media&token=bf5e6a5c-18c7-4b4f-a209-42b63ae44990",
        "https://firebasestorage.googleapis.com/v0/b/custom-chess.appspot.com/o/source%2Fsample%20images%2Fevil_morty_blue.svg?alt=media&token=89e6b60c-169b-4db1-af77-1968c54e1998",
        "https://firebasestorage.googleapis.com/v0/b/custom-chess.appspot.com/o/source%2Fsample%20images%2Fevil_morty_white.svg?alt=media&token=725d1a07-7078-47d6-a1bf-99114c3adf57",
        "https://firebasestorage.googleapis.com/v0/b/custom-chess.appspot.com/o/source%2Fsample%20images%2Fevil_morty_red.svg?alt=media&token=24b28ab7-892b-4ec0-a340-b2fbce12e02f",
        "https://firebasestorage.googleapis.com/v0/b/custom-chess.appspot.com/o/source%2Fsample%20images%2Fmaterial-ui.svg?alt=media&token=c99c99b5-7f94-483b-9300-0aedc0d09a6b",
        "https://firebasestorage.googleapis.com/v0/b/custom-chess.appspot.com/o/source%2Fsample%20images%2Fmaterial-ui-red.svg?alt=media&token=b68155b4-500b-4523-a7f6-3d91a802c97b",
        "https://firebasestorage.googleapis.com/v0/b/custom-chess.appspot.com/o/source%2Fsample%20images%2Fnode-green.png?alt=media&token=ead36db1-554a-40fa-b329-c7b21db5a888",
        "https://firebasestorage.googleapis.com/v0/b/custom-chess.appspot.com/o/source%2Fsample%20images%2Fnode-red.png?alt=media&token=5618891c-2e99-4cbd-9fda-56166755d429",
        "https://firebasestorage.googleapis.com/v0/b/custom-chess.appspot.com/o/source%2Fsample%20images%2Fwhite_firehat.svg?alt=media&token=d67523d1-1800-458a-b73d-74f520bf3a25",
        "https://firebasestorage.googleapis.com/v0/b/custom-chess.appspot.com/o/source%2Fsample%20images%2Fblack_firehat.svg?alt=media&token=ea2d8a52-0fb8-44be-b393-32d94f0e2c0d",
        "https://firebasestorage.googleapis.com/v0/b/custom-chess.appspot.com/o/source%2Fsample%20images%2Fscream.png?alt=media&token=fcc33dd9-0fc3-4efd-983f-d418758e1447",
    ]
    let data = mapUrlListCharsToValidKeyChars(sampleUrlList)
    data = JSON.stringify(data)
    fs.writeFile('./result.json', data, (err) => {
        if (err) throw err;
        console.log('Data written to file');
    });
}