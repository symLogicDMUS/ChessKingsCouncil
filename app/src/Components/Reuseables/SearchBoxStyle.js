export var SearchBoxStyle = {
    desktop: (heightMultiplier, widthMultiplier, left, top) => {
        const height = window.screen.availHeight * heightMultiplier;
        const width = height * widthMultiplier;
        return {
            width: width,
            height: height,
            left: left,
            top: top
        };
    }
}