import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/auth";

export function deleteFolderContents(path) {
    const ref = firebase.storage().ref(path);
    ref.listAll()
        .then(dir => {
            dir.items.forEach(fileRef => {
                deleteFile(ref.fullPath, fileRef.name);
            });
            dir.prefixes.forEach(folderRef => {
                deleteFolderContents(folderRef.fullPath);
            })
        })
        .catch(error => {
            console.log(error);
        });
}

function deleteFile(pathToFile, fileName) {
    const ref = firebase.storage().ref(pathToFile);
    const childRef = ref.child(fileName);
    childRef.delete()
}