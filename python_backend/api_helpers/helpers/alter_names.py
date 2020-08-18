import os


def alter_names(dir_, old, new):
    """ """
    for file in os.listdir(dir_):
        path = dir_ + '/' + file
        new_path = path.replace(old, new)
        os.rename(path, new_path)


if __name__ == "__main__":
     pass # TODO: implement test
