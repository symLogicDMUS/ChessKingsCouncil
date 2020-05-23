from ranges.path_pieces.bishop import bishop
from ranges.knight.knight import knight
from ranges.path_pieces.queen import queen
from ranges.pawn.pawn import pawn
from ranges.king.king import king
from ranges.path_pieces.rook import rook

range_funcs = {'Bishop': bishop, 'Rook': rook, 'Queen': queen, 'Knight': knight, 'Pawn': pawn, 'King': king}
