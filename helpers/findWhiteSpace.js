function whiteSpace(data) {
    let regex = /\s/g
    console.log(data)
    if (data == null || data == undefined) {
        return ""
    }
    return data.toString().replace(regex, '')
}
module.exports = whiteSpace