from custom_except import *
import os
import platform


def get_fullpath(dirname_):
    """get the fullpath of directory name dirname_ when dirname_ is a basename"""
    current = '.'
    if platform.system() == 'Windows':
        root = "C:\\"
    else:
        root = '/'
    fullpath = 'not-found'
    while fullpath == 'not-found':
        if os.path.basename(os.path.realpath(current)) == dirname_:
            fullpath = os.path.realpath(current)
        elif os.path.basename(os.path.realpath(current)) == root:
            break
        else:
            current = '../' + current
    return fullpath


if __name__ == "__main__":
    print(get_fullpath('python_backend'))