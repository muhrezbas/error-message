function checkNumber(data) {
    let regex = /[0-9]+$/;
    return data.match(regex)

}
module.exports = checkNumber