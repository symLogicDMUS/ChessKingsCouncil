import base64
from write_json import write_json


def get_special_piece_b64():
    """ """
    encoded_strings = {"King": {}, "Pawn": {}}

    with open("./imgs/BK.svg", 'rb') as img_file:
        encoded_strings["King"]["B"] = str(base64.b64encode(img_file.read()))
    with open("./imgs/WK.svg", 'rb') as img_file:
        encoded_strings["King"]["W"] = str(base64.b64encode(img_file.read()))
    with open("./imgs/BP.svg", 'rb') as img_file:
        encoded_strings["Pawn"]["B"] = str(base64.b64encode(img_file.read()))
    with open("./imgs/WP.svg", 'rb') as img_file:
        encoded_strings["Pawn"]["W"] = str(base64.b64encode(img_file.read()))
    return encoded_strings


if __name__ == "__main__":
    encoded_strings = get_special_piece_b64()
    write_json(encoded_strings, "./test_objects/special-piece-b64img.json")