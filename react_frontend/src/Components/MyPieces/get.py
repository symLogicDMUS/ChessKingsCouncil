import os
from pprint import pprint


def get():
    images = []
    for img in os.listdir("./Images"):
        images.append(img)
    return images


if __name__ == "__main__":
    pprint(get())