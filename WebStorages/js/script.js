// localStorage.setItem('name','Emilya');
// localStorage.setItem('surname','Aghayeva');
localStorage.setItem('user',JSON.stringify({'username':'Elvira','password':'12345'}));

console.log(JSON.parse(localStorage.getItem('user')));

// console.log(localStorage.getItem('surname'));
// localStorage.removeItem('name');