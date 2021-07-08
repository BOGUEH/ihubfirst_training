
// class users{
//     constructor(username, age, email){
//         this.username = username;
//         this.age =  age;
//         this.email = email;
//     }

// }

//    const userOne = new users('blessing', 26, 'blessing@gmail.com');
//    const userTwo = new users('ovovwe', 22, 'ovovwe@gmail.com');
//    console.log('userOne');

fetch ('https://randomuser.me/api/?results=19')
    .then((resp)=>{
        console.log(resp)
        return resp.json()
    }).then((data)=>{
        console.log(data);
    }).catch((error)=>{
        console.log(error);
    })
