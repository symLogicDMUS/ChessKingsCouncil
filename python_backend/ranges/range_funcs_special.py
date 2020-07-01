from ranges.pawn.pawn import pawn
from ranges.king.king import king

__doc__ =\
    """
    range_funcs_special is range functions for special pieces, ones that can not be fully defined by the defs format
    """

range_funcs_special = {'Pawn': pawn, 'King': king}
