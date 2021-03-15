export default {
    buildReadableNameFromId: id => id.split('::')[1].replace(/\.?([A-Z]+)/g, (x,y) => ' '+y),
    buildIdFromReadableName: (readableName, collectionId) => collectionId + '::' + readableName.replace(/\s[a-z]/g, s => s.toUpperCase()).replace(/\s+/g, ''),
    buildReadableName: row => row.methodName.replace(/\.?([A-Z]+)/g, (x,y) => ' '+y)
}