import makeStyles from "@material-ui/core/styles/makeStyles";

export const col = (val) => window.screen.availWidth * val

export const styles = {
    nav_bar: {
        position: "absolute",
        left: 0,
        top: 0,
        display: "grid",
        zIndex: "0",
        gridTemplateColumns: `${col(0.02)}px repeat(8, ${col(0.12)}px) ${col(0.02)}px`,
    },
};
