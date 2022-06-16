import Color from "./Color";
import PieceId from "./PieceId";
import Occurrence from "./Occurrence";
import {Blank} from "./Blank";

type SqrContent = `${Color}${PieceId}${Occurrence}` | Blank;
export default SqrContent;