
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

 let uii = document.getElementById('users')

fetch ('https://randomuser.me/api/?results=19')
    .then((resp)=>{
       
        return resp.json()//converting the link output to a json format which sometimes is an array
    }).then((data)=>{
       
        let users= data.results;
        return users.map((user)=>{//the map is use to convert an array to an object

            const li = document.createElement('li'); //we use the create element to an html element and its on a tag element that can be created with the createElement
            const img = document.createElement('img');
            const p = document.createElement('p');

            uii.appendChild(li); //the appendChild is to attach an elment to a parent element or another element
            let paragraph = li.appendChild(p)
            let image = li.appendChild(img)
            let firstName = user.name.first;
            let lastName = user.name.last;

            console.log(user.picture.large)
            paragraph.innerHTML =`${firstName} ${lastName}`;
            image.src = user.picture.large; //to get an image we use the scr  and add the link of the image. in this case its an object that is why there is no link
        })
    }).catch((error)=>{
       
    })
