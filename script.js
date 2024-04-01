const inputText=document.getElementById("text-input");
const btnCheck=document.getElementById("check-btn");
const messageText=document.getElementById("result");


btnCheck.addEventListener("click",()=>{
    const inputValue=inputText.value.trim();
    
    if(inputValue==0){
        alert("Please input a value")
    } else{
        const cleanInput=inputValue.replace(/[^a-zA-Z0-9]/g,'').toLowerCase();
        const reversedInput=cleanInput.split('').reverse().join('');
            if(cleanInput===reversedInput){
                messageText.innerHTML=cleanInput + ' Is a Palindrome!';
            }else{
                messageText.innerHTML=cleanInput + ' Is Not a Palindrome!'
            }
        
    }
})