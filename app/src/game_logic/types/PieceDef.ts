import Span from "./Span";
import Offset from "./Offset";
import StrOffset from "./StrOffset";

type PieceDef = {
    B: {
        img: string,
        spans?: Span [],
        offsets?: Offset [] | StrOffset [],
    },
    W: {
        img: string,
        spans?: Span [],
        offsets?: Offset [] | StrOffset [],
    },
}
export default PieceDef;