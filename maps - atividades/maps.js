function getAdmins(map){
    let adm = []

    for([key, value] of map){
        if(value === "Admin"){
            adm.push(key)
        }

    }
    return adm
}

const USERS = new Map()

USERS.set('Luiz', 'Admin')
USERS.set('Gabriel','Admin')
USERS.set('Roberta', 'Estagiaria')

console.log(getAdmins(USERS))