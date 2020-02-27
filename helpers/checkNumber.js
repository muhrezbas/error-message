function checkNumber(data) {
    let regex = /[0-9]+$/;
    return String(data).match(regex)

}
module.exports = checkNumber