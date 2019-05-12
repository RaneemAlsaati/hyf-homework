var number = [];
for (var i = 0; i < 100; i++) {
number[i] = i + 1; 
        }

for (var i = 0; i < number.length; i++) {
    console.log(number[i]);

if (number % 3 ===0 ){
     console.log("This is divisible by 3")
    }
}


for (var i = 0; i < number.length; i++){
    if (number.length % 5 === 0){
        console.log("that is right")
    }
    console.log(number.length);
}
for (var i = 0; i < number.length; i++){
    if (number.length % 5 === 0 & number.length % 3 === 0){
        console.log("Jackpot")
    }
}
//

function btn(){

let MyButton = document.createElement ('button');
    MyButton.innerHTML = 'click me';
    document.body.appendChild(MyButton);
}
btn();
function doIt (){
    document.getElementById("button")
    document.addEventListener
}

 //
 fetch(' https://reqres.in/api/users')
    .then(response => response.json())
    .then((things) => {
        console.log(things);
    });
