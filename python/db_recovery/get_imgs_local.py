import os
from pprint import pprint


def get_imgs_local():
    """ """
    img_strs = {}
    for file_name in os.listdir("./test_objects/img_strs"):
        f = open("./test_objects/img_strs/{}".format(file_name), "r")
        img_str = f.read()
        img_name = file_name.replace(".txt", "")
        img_strs[img_name] = img_str
    return img_strs


if __name__ == "__main__":
    pprint(get_imgs_local())