export function getTextWidth(myText, fontSize, fontFamily) {
    const text = document.createElement("span");
    document.body.appendChild(text);
    text.style.font = fontFamily;
    text.style.fontSize = fontSize + "px";
    text.style.height = "auto";
    text.style.width = "auto";
    text.style.position = "absolute";
    text.style.whiteSpace = "no-wrap";
    text.innerHTML = myText;
    const width = Math.ceil(text.clientWidth);
    document.body.removeChild(text);
    return width*1.01;
}