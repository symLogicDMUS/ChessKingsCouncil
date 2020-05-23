from coordType.rankfile.nest_level.no_change import no_change
from coordType.rankfile.nest_level.tuple_ import tuple_
from coordType.rankfile.nest_level.list_tuples import list_tuples
from coordType.rankfile.nest_level.list_tuples_tuples import list_tuples_tuples

funcs = {
    0: no_change,
    1: tuple_,
    2: list_tuples,
    3: list_tuples_tuples
}
