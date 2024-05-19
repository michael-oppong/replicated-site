let input = document.querySelector("input");
let check = document.querySelector("button");

check.addEventListener("click",checker);

let checker = function () {
    let value = input.value
    if(value === input.value.split('').reverse().join('') ){
        alert("palindrome")
    }else{
        alert("Not a palindrome")
    }
}

checker()