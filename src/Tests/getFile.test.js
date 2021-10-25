const { getFile, editFilesCount} = require("../utils/fileHandleFunctions");
const fs = require('fs')


it('file should be edited', () => {
    let fileText = ''

    const newFileText = getFile({setFile: console.log, setFileOpened: console.log})
    
    expect(newFileText !== fileText).toBe(true)

})

it('count should be edited', () => {
    let count = 1

    const newCount = editFilesCount(count)

    expect(newCount).toBe(2)
})

