// let mhs = {
//     nama: "fahmy rosyadi",
//     nim: "e41212254",
//     email: "fahmyrosyadi29@gmail.com"

// }

// console.log(JSON.stringify(mhs));

let xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
        let mhs = this.responseText;
        console.log(mhs);
    }
}
xhr.open('GET','coba.json' , true);
xhr.send();