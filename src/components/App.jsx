import React , {useEffect, useState} from "react"
import { getFile, saveFile, editFilesCount } from "../utils/fileHandleFunctions"


const App = () => {
    const [fileOpened, setFileOpened] = useState(false)
    const [file, setFile] = useState({})
    const [fileCount, setFileCount] = useState(0)
    

    // const getFile = async () => {
    //     let [fileHandle] = await window.showOpenFilePicker();
    //     setFile(fileHandle)
    //     let fileData = await fileHandle.getFile();
    //     let text = await fileData.text();
    //     textarea.innerText = text;
    //     setFileOpened(true)
    // }

    // const saveFile = async () => {
    //     console.log('bla bla')
    //     let stream = await file.createWritable()
    //     await stream.write(textarea.innerText)
    //     await stream.close();
    //     textarea.innerText = '';
    //     setFileOpened(false)
    // }

 useEffect(() => {
    console.log(file)
 }, [file])

    return (
        <div>
           {fileCount > 0 && <h1>Files changed: {fileCount}</h1>}
           <button className='getFiles_button' data-testid='add-button' onClick={() => getFile({setFile, setFileOpened})}>Open File</button> 
           <pre id='textarea' contentEditable></pre>
           {fileOpened && <button className='getFiles_button' onClick={() => saveFile({file ,setFileOpened, fileCount, setFileCount, editFilesCount})}>Save</button> }
        </div>
    )
}

export default App;