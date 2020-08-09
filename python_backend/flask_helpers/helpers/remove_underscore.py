import os


def remove_underscore(dir_):
    """ """
    for root, dirs, files in os.walk(dir_):
        path = root.split(os.sep)
        print(os.path.basename(root))
        for file in files:
            new_file = file.replace("_", " ")
            os.rename(file, new_file)
            print(file)


if __name__ == "__main__":
    remove_underscore("../../saved_games/")