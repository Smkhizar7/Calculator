// var op = prompt("Select operator: (+,-,*,/)");
// var ch = true;
// while(ch){
//     if(op === '+' || op === '-' || op === '*' || op === '/'){
//         break;
//     }
//     op = prompt("You entered wrong operator please select right operator: (+,-,*,/)");
// }
// var a = +prompt("Enter Value 1:");
// var b = +prompt("Enter Value 2:");
// var c;
// function add(a,b){
//     c = a + b;
// }
// function sub(a,b){
//     c = a - b;
// }
// function mul(a,b){
//     c = a * b;
// }
// function div(a,b){
//     c = a / b;
// }
// switch(op){
//     case '+':
//         add(a,b);
//         document.write(a + " + " + b + " = " + c);
//         break;
//     case '-':
//         sub(a,b);
//         document.write(a + " - " + b + " = " + c);
//         break;
//     case '*':
//         mul(a,b);
//         document.write(a + " * " + b + " = " + c);
//         break;
//     case '/':
//         div(a,b);
//         document.write(a + " / " + b + " = " + c);
//         break;
// }
function clr(){
    document.getElementById('scr').value="";
}
function num(a){
    document.getElementById('scr').value += a;
}
function result(){
    var a = document.getElementById('scr').value;
    document.getElementById('scr').value = eval(a);
}