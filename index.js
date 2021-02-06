let who = ['The dog','My grandma','His turtle','My bird'];
let action = ['ate','peed','crushed','broke'];
let what = ['my homework', 'the keys', 'the car'];
let when = ['before the class','right on time','when I finished','during my lunch','while I was praying'];

function randomvalue(arr, x){
    let vindex = Math.floor(Math.random() * (x - 1));
    return arr[vindex];
} 

let htmlwho = randomvalue(who, who.length);
let htmlaction = randomvalue(action, action.length);
let htmlwhat = randomvalue(what, what.length);
let htmlwhen = randomvalue(when, when.length);

let finalExcuse = htmlwho.concat(" ", htmlaction, " " , htmlwhat , " ", htmlwhen, "." );
console.log(finalExcuse);

document.getElementById("excuse").innerHTML = finalExcuse;