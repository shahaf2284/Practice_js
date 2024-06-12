const JSONRepo = require("../Repositories/JsonRepo")
const WSTodo = require("../Repositories/WsTodo")
const WSUser = require("../Repositories/WsUser")



const getInformation = async () =>
    {
        const {users : userList} = await JSONRepo.getJsonData()
        const DataToReturn =[]
        for (const elem of userList){
            let {data:user}= await WSUser.getNameAndEmail(elem.username); // just need name and email
            let {data:todos} = await WSTodo.getTodos();
            const titles = []
            for( const item of todos ){
                if (item.userId === user[0].id){ titles.push(item.title)}
                else{continue}}
            DataToReturn.push({name : user[0].name,
                    email:user[0].email,
                    Todos: titles.slice(0,10),
                    phones: elem.phone})  
        }
        return DataToReturn
        
    }

module.exports = {getInformation}