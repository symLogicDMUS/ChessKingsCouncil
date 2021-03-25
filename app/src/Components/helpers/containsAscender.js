const ascenders = ['b', 'd', 'f', 'h', 'i', 'j', 'k', 'l', 't'];

export const containsAscenders = (text) => {
    for (const ascender of ascenders) {
        if (text.includes(ascender)) {
            return true
        }
    }
    return false;
};