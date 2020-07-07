def get_color(id_):
    """ """
    try:
        return id_[0]
    except IndexError:
        print('error: not a piece id\n')
