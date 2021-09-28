export const escapeChar = "|";

export const urlToValidKeyChar = {
    "/": "||",
    ".": "|,",
    "#": "|@",
    $: "|_",
    "[": "|<",
    "]": "|>",
};

export const validKeyCharToUrl = {
    "||": "/",
    "|,": ".",
    "|@": "#",
    "|_": "$",
    "|<": "[",
    "|>": "]",
};
