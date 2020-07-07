from game_logic.ranges.specialMoves.pawn_promotion.is_promo import is_promo
import re


def promote(board, start, dest, color, default=False):
    """if start and dest indicate a pawn promotion, then promote the pawn"""
    promo_patterns = {
        'W': {'R': (r'WR[1-9]', 'WR'),
              'N': (r'WN[1-9]', 'WN'),
              'B': (r'WB[1-9]', 'WB'),
              'Q': (r'WQ[1-9]', 'WQ'),
              'K': (r'WK[1-9]', 'WK'),
              'P': (r'WP[1-9]', 'WP')
              },
        'B': {'R': (r'BR[1-9]', 'BR'),
              'N': (r'BN[1-9]', 'BN'),
              'B': (r'BB[1-9]', 'BB'),
              'Q': (r'BQ[1-9]', 'BQ'),
              'K': (r'BK[1-9]', 'BK'),
              'P': (r'BP[1-9]', 'BP')
              }
    }
    id_ = board[dest]
    if is_promo(start, dest, id_):
        if default:
            p = 'Q'
        else:
            p = input("promote to 'Q', 'R', 'B', 'N': ")
        n = len(list(filter(lambda id2_: re.fullmatch(promo_patterns[color][p][0], id2_), board.values())))
        board[dest] = promo_patterns[color][p][1] + str(n + 1)
        return board, True
    else:
        return board, False
