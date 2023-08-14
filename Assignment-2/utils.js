// Reference of Pure Function
let newLevel;
const uniqueId = (event) => {
    const targetId = document.getElementById(event.target.id).id;
    console.log(targetId);
    const uniqueName = document.getElementById("naming").value;
    if (!uniqueName) {
        alert("Enter Valid Name");
        return;
    } else if (targetId.includes("Folder")) {
        newLevel = createNewFolderNode(targetId, uniqueName, folderStructure);
    } else if (targetId.includes("File")) {
        newLevel = createNewFileNode(targetId, uniqueName, folderStructure);
    } else {
        newLevel = deleteNode(targetId, folderStructure);
    }
};

const getNewLevel = () => {
    return newLevel;
};
