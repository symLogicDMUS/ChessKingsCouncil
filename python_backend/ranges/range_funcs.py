from custom_except import *
from ranges.bishop import bishop
from ranges.knight import knight
from ranges.queen import queen
from ranges.pawn import pawn
from ranges.king import king
from ranges.rook import rook

range_funcs = {'Bishop': bishop, 'Rook': rook, 'Queen': queen, 'Knight': knight, 'Pawn': pawn, 'King': king}
