import os


def docker_rmi(img_id):
    """ """
    os.system("docker rmi {}".format(img_id))


def docker_rm(container_id):
    """ """
    os.system("docker rm {}".format(container_id))


if __name__ == "__main__":
    container_ids = [
        "d0704f80c9a3",
        "02f52702fece",
        "fc9510e2a288",
        "2ebd1ce46170",
        "e59ee9c0b3e2",
        "63dec0d54e9d",
        "61335a8556c6",
        "b74095119c79",
        "36fb94301088",
        "72ede66037ba",
        "55ed7187db57"
    ]
    for id_ in container_ids:
        docker_rm(id_)
    img_ids = [
        "9de29071940d",
        "b755be444b1c",
        "4baa08b4e55a",
        "1204a770c692",
        "36cca0bd87c1",
        "27ee4a941550",
        "253c2e22f7c7",
        "cec241471a4b",
        "e3b80bbc56d7",
        "98ce8511e05d",
        "7776d8eada1a",
        "59638b6b99f6",
        "5a6c8d0c5b0e",
        "f4d43e770196",
        "d91defd3bcab",
        "ee3000e74ce4",
        "531c16e79516",
        "a501aa0a5dac"
    ]
    for img_id in img_ids:
        docker_rmi(img_id)
