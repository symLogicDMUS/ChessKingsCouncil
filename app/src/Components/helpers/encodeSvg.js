
/**
 * https://gist.github.com/kevinweber/3c519c32db6c976e9cbb5565dc3822f1
 * */
export function encodeSvg(reactElement) {
    return 'data:image/svg+xml,' + escape(ReactDOMServer.renderToStaticMarkup((reactElement)));
}