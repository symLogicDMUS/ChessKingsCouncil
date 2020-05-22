from custom_except import *
import platform
import os
import re


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


def get_dir_containing_name(name):
    """ """
    if platform.system() == 'Windows':
        root = os.listdir("C:\\")
    else:
        root = os.listdir('/')
    dir_ = '.'
    while name not in os.listdir(dir_):
        if os.listdir(dir_) == root:
            return "error: directory not found"
        dir_ = '../' + dir_
    return dir_

def get_my_paths():
    """warning: only call from top level of application"""
    my_paths = []
    for root, dirs, files in os.walk("C:/Users/bjrat/source/repos/Python/ChessKingsCouncil/python_backend"):
        for name in files:
            path = os.path.abspath(os.path.join(root, name))
            if re.search("__(.*?)__", path) is not None:  # skip magic methods
                continue
            if "example_games" in path or "saved_games" in path: # skip game records
                continue
            my_paths.append(os.path.abspath(os.path.join(root, name)))
        for name in dirs:
            path = os.path.abspath(os.path.join(root, name))
            if re.search("__(.*?)__", path) is not None:  # skip magic methods
                continue
            if "example_games" in path or "saved_games" in path: # skip game records
                continue
            my_paths.append(os.path.abspath(os.path.join(root, name)))
    my_paths = list(map(lambda path: path.replace("\\", "/"), my_paths))
    return my_paths


def add_first_line(first_line):
    for root, dirs, files in os.walk('.'):
        for name in files:
            if name.endswith('.py') and name not in ['checker_board.py', 'board_pattern.py', 'unicode_pieces.py'] and \
                    re.search("__(.*?)__", name) is None:  # skip magic methods
                path = os.path.abspath(os.path.join(root, name))
                f = open(path, "r")
                lines_ = f.readlines()
                if lines_[0].isspace():
                    lines_.pop(0)
                f.close()
                lines_.insert(0, "{}\n".format(first_line))
                f = open(path, 'w')
                f.writelines(lines_)
                f.close()


if __name__ == "__main__":
    add_first_line('from custom_except import *')