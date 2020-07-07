def get_next_color(color):
    """get the color of player whos turn it is next"""
    if color == 'W':
        return 'B'
    else:
        return 'W'
