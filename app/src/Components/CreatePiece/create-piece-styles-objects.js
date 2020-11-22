/**
 ** The values in these function calls really do need to be computed spereratly for each function call because
 ** window.screen.availHeight and window.screen.availWidth are variable. This is a case where the redundency is
 ** necessary.
 * */

export var stylesObjects = {
    desktop: {
        Board: () => {
            const size = window.screen.availWidth * 0.39;
            return {
                width: size,
                height: size,
                top: window.screen.availHeight * 0.195,
                left: window.screen.availWidth * 0.17,
            };
        },
        Name: () => {
            return {
                width: '31.25em',
                left: window.screen.availWidth * 0.57,
                height: window.screen.availHeight * 0.08,
                top: window.screen.availHeight * 0.1976,
            };
        },
        Icon: () => {
            return {
                width: '31.25em',
                top: window.screen.availHeight * 0.288,
                height: window.screen.availHeight * 0.18,
                left: window.screen.availWidth * 0.57,
            };
        },
        Range: () => {
            return {
                width: '31.25em',
                height: '11.75em',
                top: '31.2em',
                left: window.screen.availWidth * 0.57,
            };
        },
        Location: () => {
            return {
                width: '31.25em',
                height: window.screen.availHeight * 0.103,
                top: window.screen.availHeight * 0.67,
                left: window.screen.availWidth * 0.57,
            };
        },
        Options: () => {
            return {
                width: '31.25em',
                height: window.screen.availHeight * 0.13,
                top: window.screen.availHeight * 0.785,
                left: window.screen.availWidth * 0.57,
            };
        },
    },
    mobile: {
        Board: () => {
            const H = window.screen.availHeight;
            const W = window.screen.availWidth;
            const boardAreaHeight = H * 0.6;
            const toolAreaHeight = H * 0.4;
            const margin = W * 0.01;
            const size = boardAreaHeight * 0.9 - margin * 2;
            return {
                width: size,
                height: size,
                top: margin * 10,
                left: margin * 3,
            };
        },
        Name: () => {
            const H = window.screen.availHeight;
            const W = window.screen.availWidth;
            const boardAreaHeight = H * 0.6;
            const toolAreaHeight = H * 0.4;
            const margin = W * 0.01;
            const width = W * 0.9375 - margin * 2;
            const height = toolAreaHeight * 0.5;
            return {
                width: width,
                height: height,
                top: boardAreaHeight * 1.23,
                left: margin * 5,
            };
        },
        Location: () => {
            const H = window.screen.availHeight;
            const W = window.screen.availWidth;
            const boardAreaHeight = H * 0.6;
            const margin = W * 0.03;
            const size = W * 0.635 - margin * 2;
            return {
                width: size,
                height: size,
                top: boardAreaHeight * 1.07,
                left: W * 0.21,
            };
        },
        Icon: () => {
            const H = window.screen.availHeight;
            const W = window.screen.availWidth;
            const boardAreaHeight = H * 0.6;
            const toolAreaHeight = H * 0.4;
            const margin = W * 0.01;
            const width = W - margin * 6;
            const height = toolAreaHeight * 0.85;
            return {
                width: width,
                height: height,
                top: boardAreaHeight + toolAreaHeight * 0.125,
                left: margin * 3,
            };
        },
        Range: () => {
            const H = window.screen.availHeight;
            const W = window.screen.availWidth;
            const boardAreaHeight = H * 0.6;
            const toolAreaHeight = H * 0.4;
            const margin = W * 0.03;
            const height = toolAreaHeight * 0.85 - margin;
            const width = W - margin * 2.2;
            return {
                width: width,
                height: height,
                left: margin,
                top: boardAreaHeight + margin * 3,
            };
        },

        Options: () => {
            const H = window.screen.availHeight;
            const W = window.screen.availWidth;
            const boardAreaHeight = H * 0.6;
            const toolAreaHeight = H * 0.4;
            const margin = W * 0.03;
            const width = W * 0.934;
            const height = toolAreaHeight * 0.825;
            return {
                width: width,
                height: height,
                top: boardAreaHeight + margin * 3,
                left: W * 0.03
            };
        },
        ToolsMenu: () => {
            const H = window.screen.availHeight;
            const W = window.screen.availWidth;
            const width = W * 0.934;
            const height = H * 0.48;
            const top = H * 0.6;
            return {
                width: width,
                height: height,
                top: top,
                left: W * 0.03,
            };
        },
        Modal: () => {
            
        }
    },
};
