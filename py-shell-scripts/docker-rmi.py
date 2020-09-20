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

    ]
    for img_id in img_ids:
        docker_rmi(img_id)
