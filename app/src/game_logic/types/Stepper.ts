import Coord from "./Coord";

type Stepper = (x: Coord, y: Coord) => [number, number];
export default Stepper;