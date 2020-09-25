import os


def docker_rmi(img_id):
    """ """
    os.system("docker rmi {}".format(img_id))


def docker_rm(container_id):
    """ """
    os.system("docker rm {}".format(container_id))


if __name__ == "__main__":
    container_ids = [

    ]
    for id_ in container_ids:
        docker_rm(id_)
    img_ids = [
        "07b47d940122",
        "0ff9c7b19c6f",
        "de7dc4706e02",
        "8f37f32a53d7",
    ]
    for img_id in img_ids:
        docker_rmi(img_id)
