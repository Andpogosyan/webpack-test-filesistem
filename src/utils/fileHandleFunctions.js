module.exports.getFile = async ({setFile, setFileOpened}) => {
    let [fileHandle] = await window.showOpenFilePicker();
    setFile(fileHandle)
    let fileData = await fileHandle.getFile();
    let text = await fileData.text();
    textarea.innerText = text;
    setFileOpened(true)
    return text
}


module.exports.editFilesCount  = (count) => {
    return count + 1
}


module.exports.saveFile = async ({file, setFileOpened, fileCount, setFileCount, editFilesCount}) => {
    console.log(123)
    let stream = await file.createWritable()
    
    await stream.write(textarea.innerText)
    await stream.close();
    

    textarea.innerText = '';
    setFileOpened(false)
    setFileCount(editFilesCount(fileCount))
    return false
}

