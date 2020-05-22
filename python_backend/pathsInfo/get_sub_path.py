

def get_sub_path(path, i):
    """get up to and including the index i in path"""
    return path[:i + 1]

if __name__ == "__main__":
    path = get_sub_path(['#', 'WP1', 'WP2', 'BB1'], 1)
    print(path == ['#', 'WP1'])