let button = document.getElementsByClassName("btn__number");
let result = document.querySelector('.result__text');
let clear = document.querySelector("#btn__clear");
let dot = document.querySelector("#btn__dot");
let act = document.getElementsByClassName("btn__act")
let equal = document.querySelector("#btn__eq");


for (let i = 0; i < button.length; i++) {
  button[i].onclick = function () {
    console.log(button[i].innerHTML);

    if (result.innerHTML != "0") {
      result.innerHTML += button[i].innerHTML;
    }
    else {
      result.innerHTML = button[i].innerHTML;
    }
  }

}

clear.onclick = function () {
  result.innerHTML = '0';
}

dot.onclick = function () {
  if (result.innerHTML != "0") {
    result.innerHTML += '.';
  }
  else {
    result.innerHTML = '0.';
  }

}

act.onclick = function () {
  for (let i = 0; i < result.length; i++) {

    console.log(result.innerHTML.slice(-1));
  }
}





equal.onclick = function () {
  result.innerHTML = eval(result.innerHTML);
}




