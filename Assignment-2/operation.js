//Reference of Impure Function
const createNewFolderNode = (folderId, uniqueName, folderStructure) => {
    const newLevel = findFolderId(folderId, uniqueName, folderStructure);
    return newLevel;
};

const createNewFileNode = (fileId, uniqueName, folderStructure) => {
    console.log(`in createnewfilenode ${fileId}`);
    const found = findFileId(fileId, uniqueName, folderStructure);
    if (found) {
        console.log(folderStructure);
    } else {
        alert("Something Went Wrong");
    }
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

const findFolderId = (folderId, uniqueName, folderStructure) => {
    let id = document.getElementById(folderId).parentNode.parentNode.id;
    if (folderStructure["id"] === id) {
        let newLevel = folderStructure["level"] + 1;
        let children = folderStructure["children"];
        console.log(typeof children);
        let newObject = {
            level: newLevel,
            id: `${uniqueName}FolderDiv`,
            name: `${uniqueName}`,
            children: [],
            type: "folder",
        };
        children.push(newObject);
        console.log(folderStructure);
        return newLevel;
    } else {
        let listOfChildren = folderStructure["children"];
        for (let obj of listOfChildren) {
            let newLevel = findFolderId(folderId, uniqueName, obj);
            if (newLevel) {
                return newLevel;
            }
        }
    }
    console.log(folderStructure);
};

const findFileId = (fileId, uniqueName, folderStructure) => {
    let id = document.getElementById(fileId).parentNode.parentNode.id;
    if (folderStructure["id"] === id) {
        let newLevel = folderStructure["level"] + 1;
        let children = folderStructure["children"];
        console.log(typeof children);
        let newObject = {
            level: newLevel,
            id: `${uniqueName}FileDiv`,
            name: `${uniqueName}`,
            children: [],
            type: "file",
        };
        children.push(newObject);
        return true;
    } else {
        let listOfChildren = folderStructure["children"];
        for (let obj of listOfChildren) {
            let found = findFileId(fileId, uniqueName, obj);
            if (found) {
                return true;
            }
        }
    }
};
