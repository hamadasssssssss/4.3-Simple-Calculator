function add() {
    let firstnum = parseFloat(document.getElementById("num1").value);
    let secondnum = parseFloat(document.getElementById("num2").value);
    let result = firstnum + secondnum;
    document.getElementById("result").innerHTML = result;
}
function subtract() {
    let firstnum = parseFloat(document.getElementById("num1").value);
    let secondnum = parseFloat(document.getElementById("num2").value);

    let result = firstnum - secondnum;


    document.getElementById("result").innerHTML = result;
}
function mutiply() {
    let firstnum = parseFloat(document.getElementById("num1").value);
    let secondnum = parseFloat(document.getElementById("num2").value);

    let result = firstnum * secondnum;


    document.getElementById("result").innerHTML = result;
}
function Divided() {

    let firstnum = parseFloat(document.getElementById("num1").value);
    let secondnum = parseFloat(document.getElementById("num2").value);

    let result = firstnum / secondnum;


    document.getElementById("result").innerHTML = result;
}
function squarroot(){
      let firstnum = parseFloat(document.getElementById("num1").value);
    let secondnum = parseFloat(document.getElementById("num2").value);

    let result = Math.sqrt(firstnum)


    document.getElementById("result").innerHTML = result;
}
function power(){
     let firstnum = parseFloat(document.getElementById("num1").value);
    let secondnum = parseFloat(document.getElementById("num2").value);

    let result = Math.pow(firstnum , secondnum )


    document.getElementById("result").innerHTML = result;
}
