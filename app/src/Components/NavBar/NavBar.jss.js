import makeStyles from "@material-ui/core/styles/makeStyles";

const col = (val) => window.screen.availWidth * val

export const styles = {
    nav_bar: {
        position: "absolute",
        display: "grid",
        zIndex: "0",
        gridTemplateColumns: `${col(0.03)}px repeat(8, ${col(0.12)}px) ${col(0.01)}px`,
        gridTemplateRows: '3.5em'
    },
};
