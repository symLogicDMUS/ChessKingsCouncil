from read_json import read_json

if __name__ == '__main__':
    old_url_dict = read_json('./old_urls.json')
    new_url_dict = read_json('./new_urls.json')
    for img_name in old_url_dict.keys():
        pass
