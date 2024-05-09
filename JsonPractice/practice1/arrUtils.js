

const utils = require('./strUtils');

function getArrLength(arr)
{
    let total = 0;
    arr.forEach(element => {
        let len = utils.getLength(element)
        total += len;
    });
    return total;
}

module.exports = {getArrLength}