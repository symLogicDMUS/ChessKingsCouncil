export const height = () => window.screen.height;
export const width = () => window.screen.width;
export const availWidth = () => window.screen.availWidth;
export const availHeight = () => window.screen.availHeight;
export const wOverH =  () => availWidth() / availHeight();
export const hOverW = () => availHeight() / availWidth();
export const centerOfScreenX = () => availWidth()*0.5;
export const centerOfScreenY = () => availHeight()*0.5;
