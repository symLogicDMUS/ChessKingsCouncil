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
                width: window.screen.availWidth * 0.26,
                left: window.screen.availWidth * 0.57,
                height: window.screen.availHeight * 0.08,
                top: window.screen.availHeight * 0.1976,
            };
        },
        Icon: () => {
            return {
                top: window.screen.availHeight * 0.288,
                width: window.screen.availWidth * 0.26,
                height: window.screen.availHeight * 0.18,
                left: window.screen.availWidth * 0.57,
            };
        },
        Range: () => {
            return {
                width: window.screen.availWidth * 0.26,
                height: window.screen.availHeight * 0.18,
                top: window.screen.availHeight * 0.478,
                left: window.screen.availWidth * 0.57,
            };
        },
        Location: () => {
            return {
                width: window.screen.availWidth * 0.26,
                height: window.screen.availHeight * 0.103,
                top: window.screen.availHeight * 0.67,
                left: window.screen.availWidth * 0.57,
            };
        },
        Options: () => {
            return {
                width: window.screen.availWidth * 0.26,
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
            const size = boardAreaHeight*0.9 - margin*2;
            return {
                width: size,
                height: size,
                top: margin*10,
                left: margin*3,
                
            };
        },
        Name: () => {
            const H = window.screen.availHeight;
            const W = window.screen.availWidth;
            const boardAreaHeight = H * 0.6;
            const toolAreaHeight = H * 0.4;
            const margin = W * 0.01;
            const width = W*0.5-margin*2;
            const height = toolAreaHeight * 0.25;
            return {
                width: width,
                height: height,
                top: boardAreaHeight*0.98,
                left: margin,
                
            };
        },
        Location: () => {
            const H = window.screen.availHeight;
            const W = window.screen.availWidth;
            const boardAreaHeight = H * 0.6;
            // const toolAreaHeight = H * 0.4;
            const margin = W * 0.03;
            const size = W*0.4-margin*2;
            return {
                width: size,
                height: size,
                top: boardAreaHeight*0.99,
                left: W*0.63,
            };
        },
        Icon: () => {
            const H = window.screen.availHeight;
            const W = window.screen.availWidth;
            const boardAreaHeight = H * 0.6;
            const toolAreaHeight = H * 0.4;
            const margin = W * 0.01;
            const width = W-margin*6;
            const height = toolAreaHeight * 0.51;
            return {
                width: width,
                height: height,
                top: boardAreaHeight + toolAreaHeight*0.48,
                left: margin*3,
                
            };
        },
        Range: () => {
            const H = window.screen.availHeight;
            const W = window.screen.availWidth;
            const boardAreaHeight = H * 0.6;
            const toolAreaHeight = H * 0.4;
            const margin = W * 0.03;
            const height = W*0.4-margin*2;
            const width = toolAreaHeight * 0.835;
            return {
                width: width,
                height: height,
                left: margin,
                top: boardAreaHeight-margin*0.25,
                
            };
        },

        Options: () => {
            const H = window.screen.availHeight;
            const W = window.screen.availWidth;
            const boardAreaHeight = H * 0.595;
            const toolAreaHeight = H * 0.4;
            const margin = W * 0.03;
            const width = W*0.3-margin*2;
            const height = toolAreaHeight * 0.975;
            return {
                width: width,
                height: height,
                top: boardAreaHeight,
                left: W*0.73,
                
            };
        },
    },
};
