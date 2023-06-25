//add, edit, delete, get
const user = [ {
    id : 1,
    name : "udhaya",
    age : 20
},{
    id : 2,
    name : "varsh",
    age: 22
}]

const addUser = (obj) => {
    obj.push({
        id : 3,
        name: 'Billy',
        age: 30,
     });
    return obj;
}

const editUser = (id1, key, value) => {
    // user.map((obj) => {
    //     if(obj.id == id1){
    //         obj[key] = value;
    //     }
    // })
    // return user;
    var ind = user.findIndex((obj) => obj.id == id1);
    if(ind !== -1)
    user[ind][key] = value;
    return user;
}
const deleteUser = (id) => {
            var ind = user.findIndex((obj) => obj.id == id);
            user.splice(ind,1);
            return user;
}

const getUser = (id1) => {
    // var ind;
    // user.forEach((obj) => {
    //     if(obj.id == id1){
    //         ind = user.indexOf(obj);
    //         // return user[ind];
    //     }
    // })
    // return user[ind];
    return user.find((obj) => obj.id === id1)
}

const addRes = addUser(user);
console.log(addRes);
const editRes = editUser(2, "name", "Varshini");
console.log(editRes);
const deleteRes = deleteUser(2);
console.log(deleteRes);
const getRes = getUser(1);
console.log(getRes);

