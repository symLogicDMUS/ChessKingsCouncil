
from coordType.is_rankfile import is_rankfile


def is_valid_input(str_):
    """input is valid if start and dest are both rankfiles or 'X' """
    if is_rankfile(str_) or str_.upper() == 'X':
        return True
    else:
        return False
