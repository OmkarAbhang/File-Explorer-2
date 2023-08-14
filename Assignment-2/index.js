// const { append } = require("express/lib/response");

function customMain() {
    const rootFolder = document.getElementById("rootFolder");
    const rootFile = document.getElementById("rootFile");
    const rootDelete = document.getElementById("rootDelete");

    rootFolder.addEventListener("click", uniqueId);
    rootFile.addEventListener("click", uniqueId);
    rootDelete.addEventListener("click", uniqueId);
}

function createFolderItem() {
    let folderName = document.getElementById("naming");

    // Create a new div element for the folder item
    var newFolderDiv = document.createElement("div");

    newFolderDiv.className = "item"; // Set the CSS class
    newFolderDiv.id = folderName.value.replace(/ /g, "_") + "FolderDiv";
    // Create the child elements for the new folder item
    var arrowSpan = createArrow(folderName);
    arrowSpan.id = folderName.value.replace(/ /g, "_") + "ArrowSpan";

    var nameSpan = nameingContainer(folderName);
    nameSpan.id = folderName.value.replace(/ /g, "_") + "NameSpan";

    var folderSpan = createFolder(folderName);
    folderSpan.id = folderName.value.replace(/ /g, "_") + "FolderSpan";

    var fileSpan = createFile(folderName);
    fileSpan.id = folderName.value.replace(/ /g, "_") + "FileSpan";

    var deleteSpan = createDeleteBtn(folderName);
    deleteSpan.id = folderName.value.replace(/ /g, "_") + "DeleteSpan";

    // Append the child elements to the new folder div
    newFolderDiv.appendChild(arrowSpan);
    newFolderDiv.appendChild(nameSpan);
    newFolderDiv.appendChild(folderSpan);
    newFolderDiv.appendChild(fileSpan);
    newFolderDiv.appendChild(deleteSpan);

    let newLevel = getNewLevel();
    newLevel *= 10;
    newFolderDiv.style.paddingLeft = `${newLevel}px`;

    // Append the new folder div to the file explorer
    var fileExplorer = document.getElementById("fileExplorer");
    fileExplorer.appendChild(newFolderDiv);
}

function createFileItem() {
    let fileName = document.getElementById("naming");

    // Create a new div element for the folder item
    var newFileDiv = document.createElement("div");
    newFileDiv.className = "item"; // Set the CSS class
    newFileDiv.id = fileName.value.replace(/ /g, "_") + "FileDiv";

    // Create the child elements for the new folder item
    var arrowSpan = createArrow();
    arrowSpan.id = fileName + "ArrowSpan";

    var nameSpan = nameingContainer(fileName);
    nameSpan.id = fileName.value.replace(/ /g, "_") + "NameSpan";

    var fileSpan = createFile(fileName);
    fileSpan.id = fileName.value.replace(/ /g, "_") + "FileSpan";

    var deleteSpan = createDeleteBtn(fileName);
    deleteSpan.id = fileName.value.replace(/ /g, "_") + "DeleteSpan";

    // Append the child elements to the new folder div
    newFileDiv.appendChild(arrowSpan);
    newFileDiv.appendChild(nameSpan);
    newFileDiv.appendChild(fileSpan);
    newFileDiv.appendChild(deleteSpan);

    // Append the new folder div to the file explorer
    var fileExplorer = document.getElementById("fileExplorer");
    fileExplorer.appendChild(newFileDiv);
}

function createFolder(folderName) {
    var folderSpan = document.createElement("span");
    folderSpan.className = "folder";
    var folderBtn = document.createElement("img");
    // folderBtn.addEventListener("click", uniqueId);
    folderBtn.src = "images/icons8-folder-480.png";
    folderBtn.className = "folderBtn";
    folderBtn.id = folderName.value.replace(/ /g, "_") + "FolderBtn";
    folderBtn.addEventListener("click", uniqueId);
    folderBtn.onclick = createFolderItem;
    folderSpan.appendChild(folderBtn);
    return folderSpan;
}

function createFile(fileName) {
    var fileSpan = document.createElement("span");
    fileSpan.className = "file";
    var fileBtn = document.createElement("img");
    fileBtn.src = "images/newFile.png";
    fileBtn.className = "fileBtn";
    fileBtn.id = fileName.value.replace(/ /g, "_") + "FileBtn";
    fileBtn.addEventListener("click", uniqueId);
    fileBtn.onclick = createFileItem;
    fileSpan.appendChild(fileBtn);
    return fileSpan;
}

function createDeleteBtn(userInput) {
    var deleteSpan = document.createElement("span");
    deleteSpan.className = "delete";
    var deleteBtn = document.createElement("img");
    deleteBtn.src = "images/icons8-delete-24.png";
    deleteBtn.className = "deleteBtn";
    deleteBtn.id = userInput.value.replace(/ /g, "_") + "DeleteBtn";
    deleteBtn.addEventListener("click", uniqueId);
    deleteBtn.textContent = "🗑";
    deleteSpan.appendChild(deleteBtn);
    return deleteSpan;
}

function createArrow() {
    var arrowSpan = document.createElement("span");
    arrowSpan.className = "arrow";
    var arrowImg = document.createElement("img");
    arrowImg.src = "images/icons8-right-button-48.png";
    arrowImg.alt = "➡";
    arrowSpan.appendChild(arrowImg);
    return arrowSpan;
}

function nameingContainer() {
    var nameSpan = document.createElement("span");
    nameSpan.className = "name";
    const userInput = document.getElementById("naming");
    nameSpan.textContent = `${userInput.value}`;
    nameSpan.style.fontSize = "30px";
    return nameSpan;
}

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    let toogleBtn = document.getElementById("darkModeButton");
    let displayText = toogleBtn.innerHTML;
    if (displayText === "Dark Mode") {
        // In Dark Mode
        toogleBtn.innerHTML = "Light Mode";
    } else {
        // In Light Mode
        toogleBtn.innerHTML = "Dark Mode";
    }
}
