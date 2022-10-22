//Vanila js
// let mhs = {
//     nama: "fahmy rosyadi",
//     nim: "e41212254",
//     email: "fahmyrosyadi29@gmail.com"

// }
// stringify -> dari object to json
// console.log(JSON.stringify(mhs));

// let xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function () {
//     if (xhr.readyState == 4 && xhr.status == 200) {
//         //parse -> dari json to object
//         let mhs = JSON.parse(this.responseText);
//         console.log(mhs);
//     }
// }
// xhr.open('GET','coba.json' , true);
// xhr.send();

// jquery
$.getJSON('coba.json', function(data){

    console.log(data);
})