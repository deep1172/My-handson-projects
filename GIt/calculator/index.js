let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';
for (item of buttons){
    item.addEventListener('click',(e)=>
    {
        buttontext =e.target.innerText;
        // console.log("button text", buttontext);
        if (buttontext =='X') {
                buttontext=='*';
                screen.value += buttontext;

        }
         else if (buttontext == 'AC') {
            screen.value = ' ' ;
            screen.Value = clearTimeout;
        }
        else if (buttontext == '=') {
            screen.value= eval(screenValue)
        }
        else{
            screenValue += buttontext;
            screen.value = screenValue;

        }
        
    })
}