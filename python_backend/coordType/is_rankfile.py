
from re import fullmatch


def is_rankfile(str_):
    """return true if the input string is a rankfile, otherwise false"""
    if type(str_) != str:
        return False
    if fullmatch(r'[a-h][1-8]', str_) is not None:
        return True
    else:
        return False


if __name__ == "__main__":
    print(is_rankfile("a2"))
    print(is_rankfile("a9"))
    print(is_rankfile("i3"))
