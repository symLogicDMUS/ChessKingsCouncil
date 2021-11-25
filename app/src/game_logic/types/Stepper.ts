import Coord from "./Coord";
import {XY} from "./XY";

type Stepper = (x: Coord, y: Coord) => XY;
export default Stepper