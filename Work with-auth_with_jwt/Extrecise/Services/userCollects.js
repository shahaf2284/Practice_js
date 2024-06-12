const userRepo = require("../Repository/userRepo")
const addressRepo = require("../Repository/addressRepo")
const presonRepo = require("../Repository/presonRepo")



const dataCollects = async () =>{
    // const {data:user} = await userRepo.getAllUsers()
    // const address = await addressRepo.getAllAddress()
    const data = await presonRepo.getAllPersons()

    console.log(address)
    const array = data.persons.map((element) => 
        {
            const obj = {}
            // const obj =  {
            //     id : user[i].id, 
            //     name : user[i].name,
            //     email : user[i].email,
            //     phone: element.phone, 
            //     address:{
            //         city: address[i].city,
            //         country:address[i].country,
            //     }
            // }
            // return obj
            })
        return array
        } 

module.exports = {dataCollects}