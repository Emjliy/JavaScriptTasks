
//1 drop 1 drag oluna bilen
// let drag = document.querySelector('.drag');
// let drop = document.querySelector('.drop');

// drag.ondragstart =
//     function (e) {
//         e.dataTransfer.setData("id", this.getAttribute("id"));
//     };

// drop.ondragover = e => e.preventDefault(); //drop olunma icazesi verdik
// //default eventi drop olmaga qoymur.

// drop.ondrop = function (e) {
//     e.preventDefault();
//     let id = e.dataTransfer.getData("id");
//     this.append(document.getElementById(id));//id si bu olan id olan
//     //elementi append ele dropa demekdi
// }


//2 drop oluna bilen div w3school
let drops = document.querySelectorAll('.drop');
let drag = document.querySelector('.drag');

drag.ondragstart = function (e) {
    e.dataTransfer.setData("id", this.id);
};

[...drops].forEach(drop => {
    drop.ondragover = e => e.preventDefault(); 
    drop.ondrop = function (e) {
        let id = e.dataTransfer.getData("id");
        this.append(document.getElementById(id));
    }
});