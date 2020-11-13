export var CloseStyle = {
    desktop: (sizeMultipier, top, left) => {
        const size = window.screen.availWidth * sizeMultipier;
        return {
            zIndex: 10,
            width: size,
            height: size,
            left: left,
            top: top,
        };
    },
};
