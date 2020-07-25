import re


def parse_status_str(status_str):
    """break the status part of the fen string into its components and return"""
    turn = re.search(r'(w|b)', status_str).group()
    status_str = status_str.replace(turn, '', 1)
    castle_avail = re.search(r'(KQkq|KQk|KQq|KQ|Qkq|Qk|Qq|Q|Kkq|Kk|Kq|K|kq|k|q|-)', status_str).group()
    status_str = status_str.replace(castle_avail, '', 1)
    en_passant_avail = re.search(r'(([a-h][1-8])|-)', status_str).group()
    status_str = status_str.replace(en_passant_avail, '', 1)
    hm_num = re.search('\d+', status_str).group()
    status_str = status_str.replace(hm_num, '', 1)
    fm_num = re.search('\d+', status_str).group()
    status_str = status_str.replace(fm_num, '', 1)
    return turn, castle_avail, en_passant_avail, hm_num, fm_num


if __name__ == "__main__":
    status_strs = \
        ['w KQkq - 1 25',
         'w K - 0 1',
         'w KQkq - 8 13',
         'w KQkq - 8 13',
         'w - - 0 1',
         'w - - 0 1',
         'w - - 0 1',
         'w - - 0 1',
         'w - - 0 1',
         'w KQkq b6 0 3',
         'w KQ a6 0 10',
         'w KQkq - 0 1',
         'w - - 0 1',
         'w KQ a6 0 10',
         'b KQkq - 1 11',
         'w KQkq h6 0 7',
         'w - - 0 1',
         'w - - 0 1',
         'w - - 0 1',
         'w - - 0 1',
         'w - - 0 1',
         'w - - 0 1']

    for s in status_strs:
        print(parse_status_str(s))
