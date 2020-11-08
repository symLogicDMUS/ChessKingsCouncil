export var stylesObjects = {
    desktop: {
        chooseMain: () => {
            return { width: window.screen.availWidth, height: window.screen.availHeight, top: 0, left: 0 };
        },
        titleContainer: () => {
            const width = window.screen.availWidth * 0.15;
            const height = window.screen.availHeight * 0.05;
            const left = window.screen.availWidth * 0.5 - width * 0.5;
            const top = window.screen.availHeight * 0.01;
            return {
                width: width,
                height: height,
                top: top,
                left: left,
            };
        },

        imageChoices: () => {
            const display = "grid";
            const width = window.screen.availWidth * 0.95;
            const gridTemplateColumns = "repeat(5, 1fr)";
            const height = window.screen.availHeight * 0.75;
            const left = window.screen.availWidth * 0.02;
            const top = window.screen.availHeight * 0.08;
            return {
                width: width,
                height: height,
                top: top,
                left: left,
                display: display,
                gridTemplateColumns: gridTemplateColumns,
            };
        },
        imageContainer: () => {
            const imgGridWidth = window.screen.availWidth * 0.95;
            const margin = imgGridWidth * 0.008;
            const size = imgGridWidth * 0.2 - margin * 2;
            return {
                width: size,
                height: size,
                marginLeft: margin,
                marginTop: margin,
            };
        },
        bottomBar: () => {
            const width = window.screen.availWidth * 0.95;
            const height = window.screen.availHeight * 0.04;
            const top = window.screen.availHeight * 0.85;
            const left = window.screen.availWidth * 0.02;
            return {
                width: width,
                height: height,
                top: top,
                left: left,
            };
        },
        closeWindow: () => {
            const width = window.screen.availWidth * 0.025;
            const height = width;
            const left = window.screen.availWidth * 0.975;
            const top = window.screen.availHeight * 0.025;
            return {
                width: width,
                height: height,
                left: left,
                top: top,
            };
        },
    },

    mobile: {
        chooseMain: () => {
            return { width: window.screen.availWidth, height: window.screen.availHeight, top: 0, left: 0 };
        },
        titleContainer: () => {
            const width = window.screen.availWidth * 0.15;
            const height = window.screen.availHeight * 0.05;
            const left = window.screen.availWidth * 0.5 - width * 0.5;
            const top = window.screen.availHeight * 0.01;
            return {
                width: width,
                height: height,
                top: top,
                left: left,
            };
        },
        SearchBar: () => {},
        imageChoices: () => {
            const display = "grid";
            const width = window.screen.availWidth * 0.95;
            const gridTemplateColumns = "repeat(2, 1fr)";
            const height = window.screen.availHeight * 0.75;
            const left = window.screen.availWidth * 0.02;
            const top = window.screen.availHeight * 0.08;
            return {
                width: width,
                height: height,
                top: top,
                left: left,
                display: display,
                gridTemplateColumns: gridTemplateColumns,
            };
        },
        imageContainer: () => {
            const imgGridWidth = window.screen.availWidth * 0.95;
            const margin = imgGridWidth * 0.025;
            const size = imgGridWidth * 0.5 - margin * 2;
            return {
                width: size,
                height: size,
                marginLeft: margin,
                marginTop: margin,
            };
        },
        bottomBar: () => {
            const width = window.screen.availWidth * 0.95;
            const height = window.screen.availHeight * 0.04;
            const top = window.screen.availHeight * 0.85;
            const left = window.screen.availWidth * 0.02;
            return {
                width: width,
                height: height,
                top: top,
                left: left,
            };
        },
        closeWindow: () => {
            const width = window.screen.availWidth * 0.025;
            const height = width;
            const left = window.screen.availWidth * 0.975;
            const top = window.screen.availHeight * 0.025;
            return {
                width: width,
                height: height,
                left: left,
                top: top,
            };
        },
    },
};
