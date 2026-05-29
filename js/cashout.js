document.getElementById('cash-out').addEventListener('click', function(event){
    event.preventDefault();

    const cashoutamount = getInputfieldValueById('cash-amount');
    const cashoutpin = getInputfieldValueById('cash-out-pin');

    if(isNaN(cashoutamount)){
        alert('Please enter a valid number for cash out amount.');
        return;
    }

    if(cashoutpin === 1234){
        const balance = getTextFieldValueById('add-balance');

        const newBalance = balance - cashoutamount;

        if(cashoutamount > balance){
            alert('Insufficient balance for cash out.');
            return;
        }

        document.getElementById('add-balance').innerText = newBalance;

        const div =  document.createElement('div');
        div.classList.add('bg-yellow-300');
        div.innerHTML = `
        <h4 class= "text-2xl font-bold">Cash out </h4> 
        <p>${cashoutamount} Withdrawn. New Balance: ${newBalance}</p>`

        document.getElementById('transaction-container').appendChild(div);
        console.log(div);
    }
    else{
        alert('Incorrect PIN. Please try again.');
    }
});