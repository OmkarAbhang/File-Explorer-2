//Reference of Impure Function
const findId = (event) => {
    const targetId = document.getElementById(event.id).id;
    const uniqueName = document.getElementById("naming").value;
    if (targetId.includes("Folder")) {
        currLevel = findTargetId(
            targetId,
            uniqueName,
            folderStructure,
            "Folder"
        );
    } else if (targetId.includes("File")) {
        currLevel = findTargetId(targetId, uniqueName, folderStructure, "File");
    } else {
        currLevel = deleteNode(targetId, folderStructure);
    }
    console.log(folderStructure["children"]);
    return currLevel;
};

const deleteNode = (targetId, folderStructure) => {
    const found = findNode(targetId, folderStructure);
    console.log(folderStructure);
};

const findNode = (targetId, folderStructure) => {
    let divId = document.getElementById(targetId).parentNode.parentNode.id;
    if (folderStructure["id"] === divId) {
        folderStructure["children"] = [];
        return true;
    } else {
        let listOfChildren = folderStructure["children"];
        for (let obj of listOfChildren) {
            let found = findNode(targetId, obj);
            if (found) {
                return true;
            }
        }
    }
};

const getFileStructure = (uniqueName, newLevel) => {
    return {
        level: newLevel,
        id: `${uniqueName}FileDiv`,
        name: `${uniqueName}`,
        children: [],
        type: "file",
    };
};

const getFolderStructure = (uniqueName, newLevel) => {
    return {
        level: newLevel,
        id: `${uniqueName}FolderDiv`,
        name: `${uniqueName}`,
        children: [],
        type: "folder",
    };
};

const findTargetId = (targetId, uniqueName, folderStructure, type) => {
    let id = document.getElementById(targetId).parentNode.parentNode.id;
    if (folderStructure["id"] === id) {
        let newLevel = folderStructure["level"] + 1;
        let children = folderStructure["children"];
        let newObject;
        if (type === "Folder") {
            newObject = getFolderStructure(uniqueName, newLevel);
        } else {
            newObject = getFileStructure(uniqueName, newLevel);
        }
        children.push(newObject);
        return newLevel;
    } else {
        let listOfChildren = folderStructure["children"];
        for (let obj of listOfChildren) {
            let newLevel = findTargetId(targetId, uniqueName, obj, type);
            if (newLevel) {
                return newLevel;
            }
        }
    }
};

// const findFolderId = (folderId, uniqueName, folderStructure) => {
//     let id = document.getElementById(folderId).parentNode.parentNode.id;
//     if (folderStructure["id"] === id) {
//         let newLevel = folderStructure["level"] + 1;
//         let children = folderStructure["children"];
//         console.log(typeof children);
//         let newObject = getFolderStructure(newLevel);
//         children.push(newObject);
//         console.log(folderStructure);
//         return newLevel;
//     } else {
//         let listOfChildren = folderStructure["children"];
//         for (let obj of listOfChildren) {
//             let newLevel = findFolderId(folderId, uniqueName, obj);
//             if (newLevel) {
//                 return newLevel;
//             }
//         }
//     }
//     console.log(folderStructure);
// };

// const findFileId = (fileId, uniqueName, folderStructure) => {
//     let id = document.getElementById(fileId).parentNode.parentNode.id;
//     if (folderStructure["id"] === id) {
//         let newLevel = folderStructure["level"] + 1;
//         let children = folderStructure["children"];
//         let newObject = getFileStructure(newLevel);
//         children.push(newObject);
//         return true;
//     }
//     let listOfChildren = folderStructure["children"];
//     for (let obj of listOfChildren) {
//         let found = findFileId(fileId, uniqueName, obj);
//         if (found) {
//             return true;
//         }
//     }
// };

// const createFolderNode = (folderId, uniqueName, folderStructure) => {
//     const currLevel = findFolderId(folderId, uniqueName, folderStructure);
//     return currLevel;
// };

// const createFileNode = (fileId, uniqueName, folderStructure) => {
//     console.log(`in createFileNode ${fileId}`);
//     const found = findFileId(fileId, uniqueName, folderStructure);
//     if (found) {
//         console.log(folderStructure);
//     } else {
//         alert("Something Went Wrong");
//     }
// };
