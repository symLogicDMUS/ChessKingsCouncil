import os


def travel_and_print(dir):
    """ """
    for root, dirs, files in os.walk(dir):
        path = root.split(os.sep)
        print((len(path) - 1) * '---', os.path.basename(root))
        for file in files:
            print(len(path) * '---', file)


if __name__ == "__main__":
    travel_and_print("../../saved games/")