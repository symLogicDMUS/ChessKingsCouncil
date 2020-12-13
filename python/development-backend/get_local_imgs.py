import os
from pprint import pprint


def get_local_imgs():
    """ """
    img_strs = {}
    for file_name in os.listdir("local_data/img_strs"):
        f = open("./local_data/img_strs/{}".format(file_name), "r")
        img_str = f.read()
        img_name = file_name.replace(".txt", "")
        img_strs[img_name] = img_str
    return img_strs


if __name__ == "__main__":
    pprint(get_local_imgs())