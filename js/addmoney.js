document.getElementById('add-money').addEventListener('click',function(event){
    event.preventDefault();


    const addmoney = getInputfieldValueById('add-amount');
    const addpin = getInputfieldValueById('add-pin');

    if(isNaN(addmoney)){
        alert('Please enter a valid number for add money amount.');
        return;
    }
    

    if(addpin === 1234){
        const balance = getTextFieldValueById('add-balance');
        

        const newBalance = balance + addmoney;

        document.getElementById('add-balance').innerText = newBalance;

        const p =document.createElement('p');
        p.innerText = `Added ${addmoney} TK. Balance: ${newBalance}`;
        console.log(p);

        document.getElementById('transaction-container').appendChild(p);
    }
    else{
        alert('Incorrect PIN. Please try again.');
        
    }
})