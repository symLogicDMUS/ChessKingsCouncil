export const rangeBoardSvgStr = (piece, light_sqr_fill, dark_sqr_fill) => `
<svg id="range_board_svg" xmlns="http://www.w3.org/2000/svg" width="480" height="480" viewBox="0 0 480 480">
  <rect id="b8" width="60" height="60" transform="translate(60)" fill=${light_sqr_fill}/>
  <rect id="d8" width="60" height="60" transform="translate(180)" fill=${light_sqr_fill}/>
  <rect id="f8" width="60" height="60" transform="translate(300)" fill=${light_sqr_fill}/>
  <rect id="h8" width="60" height="60" transform="translate(420)" fill=${light_sqr_fill}/>
  <rect id="c7" width="60" height="60" transform="translate(120 60)" fill=${light_sqr_fill}/>
  <rect id="e7" width="60" height="60" transform="translate(240 60)" fill=${light_sqr_fill}/>
  <rect id="g7" width="60" height="60" transform="translate(360 60)" fill=${light_sqr_fill}/>
  <rect id="a7" width="60" height="60" transform="translate(0 60)" fill=${light_sqr_fill}/>
  <rect id="b6" width="60" height="60" transform="translate(60 120)" fill=${light_sqr_fill}/>
  <rect id="d6" width="60" height="60" transform="translate(180 120)" fill=${light_sqr_fill}/>
  <rect id="f6" width="60" height="60" transform="translate(300 120)" fill=${light_sqr_fill}/>
  <rect id="h6" width="60" height="60" transform="translate(420 120)" fill=${light_sqr_fill}/>
  <rect id="c5" width="60" height="60" transform="translate(120 180)" fill=${light_sqr_fill}/>
  <rect id="e5" width="60" height="60" transform="translate(240 180)" fill=${light_sqr_fill}/>
  <rect id="g5" width="60" height="60" transform="translate(360 180)" fill=${light_sqr_fill}/>
  <rect id="a5" width="60" height="60" transform="translate(0 180)" fill=${light_sqr_fill}/>
  <rect id="b4" width="60" height="60" transform="translate(60 240)" fill=${light_sqr_fill}/>
  <rect id="d4" width="60" height="60" transform="translate(180 240)" fill=${light_sqr_fill}/>
  <rect id="f4" width="60" height="60" transform="translate(300 240)" fill=${light_sqr_fill}/>
  <rect id="h4" width="60" height="60" transform="translate(420 240)" fill=${light_sqr_fill}/>
  <rect id="c3" width="60" height="60" transform="translate(120 300)" fill=${light_sqr_fill}/>
  <rect id="e3" width="60" height="60" transform="translate(240 300)" fill=${light_sqr_fill}/>
  <rect id="g3" width="60" height="60" transform="translate(360 300)" fill=${light_sqr_fill}/>
  <rect id="a3" width="60" height="60" transform="translate(0 300)" fill=${light_sqr_fill}/>
  <rect id="b2" width="60" height="60" transform="translate(60 360)" fill=${light_sqr_fill}/>
  <rect id="d2" width="60" height="60" transform="translate(180 360)" fill=${light_sqr_fill}/>
  <rect id="f2" width="60" height="60" transform="translate(300 360)" fill=${light_sqr_fill}/>
  <rect id="h2" width="60" height="60" transform="translate(420 360)" fill=${light_sqr_fill}/>
  <rect id="c1" width="60" height="60" transform="translate(120 420)" fill=${light_sqr_fill}/>
  <rect id="e1" width="60" height="60" transform="translate(240 420)" fill=${light_sqr_fill}/>
  <rect id="g1" width="60" height="60" transform="translate(360 420)" fill=${light_sqr_fill}/>
  <rect id="a1" width="60" height="60" transform="translate(0 420)" fill=${light_sqr_fill}/>
  <rect id="a6" width="60" height="60" transform="translate(0 120)" fill=${dark_sqr_fill}/>
  <rect id="c6" width="60" height="60" transform="translate(120 120)" fill=${dark_sqr_fill}/>
  <rect id="e6" width="60" height="60" transform="translate(240 120)" fill=${dark_sqr_fill}/>
  <rect id="b5" width="60" height="60" transform="translate(60 180)" fill=${dark_sqr_fill}/>
  <rect id="d5" width="60" height="60" transform="translate(180 180)" fill=${dark_sqr_fill}/>
  <rect id="a4" width="60" height="60" transform="translate(0 240)" fill=${dark_sqr_fill}/>
  <rect id="e4" width="60" height="60" transform="translate(240 240)" fill=${dark_sqr_fill}/>
  <rect id="b3" width="60" height="60" transform="translate(60 300)" fill=${dark_sqr_fill}/>
  <rect id="d3" width="60" height="60" transform="translate(180 300)" fill=${dark_sqr_fill}/>
  <rect id="a8" width="60" height="60" fill=${dark_sqr_fill}/>
  <rect id="c8" width="60" height="60" transform="translate(120)" fill=${dark_sqr_fill}/>
  <rect id="e8" width="60" height="60" transform="translate(240)" fill=${dark_sqr_fill}/>
  <rect id="g8" width="60" height="60" transform="translate(360)" fill=${dark_sqr_fill}/>
  <rect id="b7" width="60" height="60" transform="translate(60 60)" fill=${dark_sqr_fill}/>
  <rect id="d7" width="60" height="60" transform="translate(180 60)" fill=${dark_sqr_fill}/>
  <rect id="f7" width="60" height="60" transform="translate(300 60)" fill=${dark_sqr_fill}/>
  <rect id="h7" width="60" height="60" transform="translate(420 60)" fill=${dark_sqr_fill}/>
  <rect id="g6" width="60" height="60" transform="translate(360 120)" fill=${dark_sqr_fill}/>
  <rect id="f5" width="60" height="60" transform="translate(300 180)" fill=${dark_sqr_fill}/>
  <rect id="h5" width="60" height="60" transform="translate(420 180)" fill=${dark_sqr_fill}/>
  <rect id="g4" width="60" height="60" transform="translate(360 240)" fill=${dark_sqr_fill}/>
  <rect id="f3" width="60" height="60" transform="translate(300 300)" fill=${dark_sqr_fill}/>
  <rect id="h3" width="60" height="60" transform="translate(420 300)" fill=${dark_sqr_fill}/>
  <rect id="a2" width="60" height="60" transform="translate(0 360)" fill=${dark_sqr_fill}/>
  <rect id="c2" width="60" height="60" transform="translate(120 360)" fill=${dark_sqr_fill}/>
  <rect id="e2" width="60" height="60" transform="translate(240 360)" fill=${dark_sqr_fill}/>
  <rect id="g2" width="60" height="60" transform="translate(360 360)" fill=${dark_sqr_fill}/>
  <rect id="b1" width="60" height="60" transform="translate(60 420)" fill=${dark_sqr_fill}/>
  <rect id="d1" width="60" height="60" transform="translate(180 420)" fill=${dark_sqr_fill}/>
  <rect id="f1" width="60" height="60" transform="translate(300 420)" fill=${dark_sqr_fill}/>
  <rect id="h1" width="60" height="60" transform="translate(420 420)" fill=${dark_sqr_fill}/>
  <rect id="c4" width="60" height="60" transform="translate(120 240)" fill=${dark_sqr_fill}/>
</svg>
`;
