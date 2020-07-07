def exit_(start, dest):
    """if start is 'X' and dest is 'X' then the player wants to exit the game so return True, else return False"""
    if start.upper() == 'X' and dest.upper() == 'X':
        return True
    else:
        return False
