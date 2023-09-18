let input1 =document.getElementById('I2');
let buttons =document.querySelectorAll('button');
let string = "";

let arr= Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click',(e) => {
        if(e.target.innerHTML == '='){
            string = eval(string);
            input1.value = string;
        }
        else if(e.target.innerHTML == 'C'){
            string = "";
            input1.value = string;
        }
        else{
            string= string + e.target.innerHTML;
            input1.value=string;
        }
    })
})
