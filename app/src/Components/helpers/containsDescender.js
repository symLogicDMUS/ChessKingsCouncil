const descenders = ['g', 'j', 'p', 'q', 'y']

export const containsDescenders = (text) => {
    for (const descender of descenders) {
        if (text.includes(descender)) {
            return true
        }
    }
    return false;
};