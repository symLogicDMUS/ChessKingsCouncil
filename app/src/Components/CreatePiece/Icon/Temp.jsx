/*
    const uploadStorageImg = async (file, name, uid) => {
        const storageRef = firebase.storage().ref(`users/images/${uid}`);
        return await storageRef.child(`${name}`).put(file).then(async r => {
            return await firebase
                .storage()
                .ref(`users/images/${uid}/${name}`)
                .getDownloadURL()
                .then(async url => {
                    const imgName = name.replace(".", "-");
                    return await saveImg(imgName, url)
                });
        })
    };

    const saveStorageImg = async (imgFileObj) => {
        if (! imgFileObj) {
            return Promise.resolve(null)
        }
        const user = firebase.auth().currentUser;
        const uid = user.uid;
        return await firebase
            .storage()
            .ref(`users/images/${uid}/${imgFileObj.name}`)
            .getDownloadURL()
            .then(async r => {
                const filePartitions = imgFileObj.name.split(".");
                const name = filePartitions[0];
                const exten = filePartitions[filePartitions.length - 1];
                const fileCopyName = name + " - copy" + "." + exten;
                return await uploadStorageImg(imgFileObj, fileCopyName, uid)
            })
            .catch(async err => {
                return await uploadStorageImg(imgFileObj, imgFileObj.name, uid)
            });
    };
* */