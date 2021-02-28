import os
import base64
from pprint import pprint
from write_json import write_json


def convert_imgs_to_b4s(dir_path):
    """ """
    encoded_strings = {}
    for file_name in os.listdir(dir_path):
        with open(dir_path + '\\' + file_name, 'rb') as img_file:
            encoded_strings[file_name] = str(base64.b64encode(img_file.read()))
    n = len(os.listdir('./theme_dicts'))
    write_json(encoded_strings, './theme_dicts/{}.json'.format(n + 1))
    return encoded_strings


if __name__ == '__main__':
    encoded_strs = convert_imgs_to_b4s(
        "C:\\Users\\bjrat\\source\\repos\\Javascript\\ChessKingsCouncil\\app\\public\\Images\\Pieces\\Star Wars")
    print(encoded_strs.keys())