const jFile = require('jsonfile')


async function NamesFromFilePeson(StreetName)
    {
        let data = await jFile.readFile('./Persons.json');
        jsonList = data.persons
        return new Promise(resolve =>{
            setTimeout( () => resolve(jsonList.filter(x => x.address.street.name === StreetName)[0].name) ,2000)
        })
    }

module.exports  = {NamesFromFilePeson}
