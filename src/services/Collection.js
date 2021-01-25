export default {
    buildReadableNameFromId: id => id.replace(/\.?([A-Z]+)/g, (x,y) => ' '+y)
}