import os
import base64
from write_json import write_json
from resolve_metatag import resolve_metatag


def convert_imgs_to_b4s(dir_path):
    """ """
    b64_strs = {}
    for file_name in os.listdir(dir_path):
        with open(dir_path + '\\' + file_name, 'rb') as img_file:
            b64_strs[file_name] = str(base64.b64encode(img_file.read()).decode('ascii'))
            b64_strs[file_name] = resolve_metatag(file_name) + b64_strs[file_name]
    n = len(os.listdir('./theme_dicts'))
    write_json(b64_strs, './theme_dicts/{}.json'.format(n + 1))
    return b64_strs


if __name__ == '__main__':
    b64_strs = convert_imgs_to_b4s(
        "C:\\Users\\bjrat\\source\\repos\\Javascript\\ChessKingsCouncil\\app\\public\\Images\\Pieces\\Star Wars")
    print(b64_strs.keys())