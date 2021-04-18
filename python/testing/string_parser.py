import re
from pprint import pprint
from write_json import write_json
from read_json import read_json


if __name__ == "__main__":
    img_name_pattern = '[a-zA-Z0-9\\-_]+\\|,(png|PNG|svg|SVG|jpeg|jpg|JPEG|JPG|gif|GIF)'
    path = "./before/test5.json"
    img_url_counts = read_json(path)
    new_url_obj = {}
    for img_url in img_url_counts.keys():
        res = re.search(img_name_pattern, img_url)
        new_url_obj[res.group(0)] = img_url_counts[img_url]
    write_json(new_url_obj, path)