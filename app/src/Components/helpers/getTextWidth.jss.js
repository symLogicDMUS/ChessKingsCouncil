import { lineHeight } from "../styles/lineHeight.jss";

export function getTextWidth(myText, fontSize, fontFamily) {
    const text = document.createElement("span");
    document.body.appendChild(text);
    text.style.font = fontFamily;
    text.style.fontSize = fontSize + "px";
    text.style.lineHeight = lineHeight(fontSize) + "px";
    text.style.height = "auto";
    text.style.width = "auto";
    text.style.position = "absolute";
    text.style.whiteSpace = "no-wrap";
    text.innerHTML = myText;
    const width = text.clientWidth;
    document.body.removeChild(text);
    return width;
}
