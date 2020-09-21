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
        "1debebb47e7e",
        "5600bef17f5b",
        "2b3f2879c728",
        "d723e64ac77e",
        "aa84cfd5e852",
        "d41e30c14c4b",
        "760f268e07da",
        "116a76de3e22",
        "e7f4c3237852"
    ]
    for img_id in img_ids:
        docker_rmi(img_id)
