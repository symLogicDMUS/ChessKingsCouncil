def is_xy(sqr):
    """ """
    if type(sqr) == tuple and len(sqr) == 2 and type(sqr[0]) == int and type(sqr[1]) == int:
        return True
    else:
        return False
