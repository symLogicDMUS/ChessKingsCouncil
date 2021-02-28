
def resolve_metatag(file_name):
    """ """
    if file_name.endswith('.png') or file_name.endswith('.PNG'):
        return 'data:image/png+xml;base64,'
    if file_name.endswith('.jpg') or file_name.endswith('.jpeg') or file_name.endswith('.JPG') or file_name.endswith('JPEG'):
        return 'data:image/jpg+xml;base64,'
    if file_name.endswith('.svg') or file_name.endswith('.SVG'):
        return 'data:image/svg+xml;base64,'
