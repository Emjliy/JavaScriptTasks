'use strict'

const user = {
    username: 'Emilya',
    password: '2002Mily',
    "email adress": "emilya.agayeva18@mail.ru",
    "city": "Baku",
}
//FIRST though object is const we can update,delete existing properties.(except object name,cause it is const)
// delete user.username;
// console.log(user.username);

// user.password='mily25';
// console.log(user.password);

//SECOND we can prevent adding new properties to the object by using object methods-preventExtentions(but still we can update,delete existing properties)
// Object.preventExtensions(user);
// user.id=5;
// console.log(user.id);

// delete user.username;
// console.log(user.username);

//THIRD we ca prevent deleting and adding object properties by using seal method(but still we can update existing properties)
// Object.seal(user);
// delete user.username;
// console.log(user.username);
// user.id=5;
// console.log(user.id);
// user.password='mily25';
// console.log(user.password);


//Fourth FREEZE This will prevent changing anything to the object. With freeze we are sure it’s not modified anywhere in our code.
Object.freeze(myObject);
delete user.username;
console.log(user.username);//deleting is not enable

user.id=5;
console.log(user.id);//adding new properties is not enable

user.password='mily25';
console.log(user.password);//updating existing properties is not enable




//salam 1s 2a 1l 1m . Spaceda sayilsin .Hansi simvoldan ne gederdi consoleda onu gostermelidi.




//tests
//1destruction
// let username=user.username;
// let password=user.password;

//2destruction daha short way
// const {username,password,...user_copy}=user;
// console.log(username);
// console.log(password);
// console.log(user_copy);

// const myObject = {
//     firstProp: true,
//     secondProp: 'Yes'
//   }
//   myObject = false            // not allowed (assign)
//   delete myObject.firstProp   // allowed (delete)
//   myObject.secondProp = 'No'  // allowed (update)
//   myObject.thirdProp = 'Yes

// const array=['1','2','3'];
// const [x,y]=array;
// console.log(x);
// console.log(y);



