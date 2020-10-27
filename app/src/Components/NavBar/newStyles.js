// // import { initWidth, computeX, computeY, gw } from "../styles/scaleValues";


// export const W = 1536; //width screen used in design
// export const H = 754; //height screen used in design
// export const Y = window.screen.availHeight / H;
// export const X = window.screen.availWidth / W;

// export function computeY(pxVal) {
//     return `${Y * pxVal}px`;
// }

// export function computeX(pxVal) {
//     return `${X * pxVal}px`;
// }

// export function gw(colWidth) {
//     /**get grid width */
//     return colWidth * X;
// }
// //column width
// const A = 185;
// const B = A * 0.22;
// const C = 5;
// const D = B + C * 2;
// const E = D;
// const F = B * 0.95;
// const G = E * 0.1;
// const H = B * 0.12;
// const I = W - (A * 8 + A * 0.21);
// const togleNavAdjustY = -E * 0.132;

// export function getPageIconStyle() {
//     return { width: B, margin: C };
// }

// export function getHelpIconStyle() {
//     return {
//         cursor: "pointer",
//         width: F,
//         height: F,
//         marginTop: G,
//         marginLeft: H,
//     };
// }

// export function getTogleNavWidgetStyle() {
//     return {
//         cursor: "pointer",
//         position: "relative",
//         height: E + C * 2.5,
//         width: I,
//         top: togleNavAdjustY,
//     };
// }

// function getTextContainer() {
//     return {
//         textAlign: "center",
//         paddingTop: computeY(6),
//         color: "#b6b6b6",
//         fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
//         fontSize: computeY(16),
//         wordWrap: "break-word",
//     };
// }

// function getNavBarButton() {
//     return {
//         zIndex: "inherit",
//         display: "grid",
//         gridTemplateColumns: `${D}px auto`,
//         gridTemplateRows: E,
//         backgroundColor: "#515151",
//         borderRight: "1px solid #707070",
//         fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
//         textDecoration: "none",
//     };
// }

// export var styles = {
//     nav_bar: {
//         position: "absolute",
//         display: "grid",
//         zIndex: 0,
//         gridTemplateColumns: `${gw(B)}px ${gw(A)}px ${gw(A)}px ${gw(A)}px ${gw(A)}px ${gw(A)}px ${gw(A)}px ${gw(A)}px ${gw(A)}px ${gw(I)}px`,
//         border: `1 solid #707070`,
//     },

//     help: {
//         gridColumn: "1",
//         zIndex: "inherit",
//         height: E,
//         backgroundColor: "#515151",
//         borderRight: "1px solid #707070",
//     },

//     home: {
//         gridColumn: "2",
//         ...getNavBarButton(),
//         icon: {
//             gridRow: "1",
//             gridColumn: "1",
//         },
//         text: {
//             gridRow: "1",
//             gridColumn: "2",
//             ...getTextContainer(),
//         },
//     },

//     new_game: {
//         gridColumn: "3",
//         ...getNavBarButton(),
//         icon: {
//             gridRow: "1",
//             gridColumn: "1",
//         },
//         text: {
//             gridRow: "1",
//             gridColumn: "2",
//             ...getTextContainer(),
//         },
//     },

//     load_game: {
//         gridColumn: "4",
//         ...getNavBarButton(),
//         icon: {
//             gridRow: "1",
//             gridColumn: "1",
//         },
//         text: {
//             gridRow: "1",
//             gridColumn: "2",
//             ...getTextContainer(),
//         },
//     },

//     create_piece: {
//         gridColumn: "5",
//         ...getNavBarButton(),
//         icon: {
//             gridRow: "1",
//             gridColumn: "1",
//         },
//         text: {
//             gridRow: "1",
//             gridColumn: "2",
//             ...getTextContainer(),
//         },
//     },

//     chess_rules: {
//         gridColumn: "6",
//         ...getNavBarButton(),
//         icon: {
//             gridRow: "1",
//             gridColumn: "1",
//         },
//         text: {
//             gridRow: "1",
//             gridColumn: "2",
//             ...getTextContainer(),
//         },
//     },

//     my_pieces: {
//         gridColumn: "7",
//         ...getNavBarButton(),
//         icon: {
//             gridRow: "1",
//             gridColumn: "1",
//         },
//         text: {
//             gridRow: "1",
//             gridColumn: "2",
//             ...getTextContainer(),
//         },
//     },

//     council_rules: {
//         gridColumn: "8",
//         ...getNavBarButton(),
//         icon: {
//             gridRow: "1",
//             gridColumn: "1",
//         },
//         text: {
//             gridRow: "1",
//             gridColumn: "2",
//             ...getTextContainer(),
//         },
//     },

//     author_github: {
//         gridColumn: "9",
//         ...getNavBarButton(),
//         icon: {
//             gridRow: "1",
//             gridColumn: "1",
//         },
//         text: {
//             gridRow: "1",
//             gridColumn: "2",
//             ...getTextContainer(),
//         },
//     },

//     togle_nav: {
//         cursor: "pointer",
//         gridColumn: "10",
//     },
// };
