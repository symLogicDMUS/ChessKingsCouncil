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

function mapValidKeyCharsToUrlChars(imgUrl) {
    for (const char of Object.keys(validKeyCharToUrl)) {
        imgUrl = strRecursiveReplace(imgUrl, char, validKeyCharToUrl[char])
    }
    return imgUrl;
}

if (require.main === module) {
    console.log(mapUrlCharsToValidKeyChars("https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/users%2Fimages%2FUDBX4otvkXdobEms530K6u4WaI23%2Fscream.png?alt=media&token=663e1bdd-6c85-4ac6-82ba-399757a10925"))
}

