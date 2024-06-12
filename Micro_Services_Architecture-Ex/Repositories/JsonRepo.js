const JFile = require('jsonfile')
const path = require('path')


const FILE = path.join(__dirname, "../data/UserFile.json");

const getJsonData = () =>
{
    return JFile.readFile(FILE)
}

module.exports  = {getJsonData}
