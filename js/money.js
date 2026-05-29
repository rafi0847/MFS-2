

//     const amount = document.getElementById('add-amount').value;
//     const pin = document.getElementById('add-pin').value;

//     if(pin === '1234'){
//     const balance = document.getElementById('add-balance').innerText;
//     const newBalance = parseFloat(balance) + parseFloat(amount);
//     document.getElementById('add-balance').innerText = newBalance;
// }
    document.getElementById('add-money').addEventListener('click',function(event){
    event.preventDefault();

    // const addmoney = getInputFieldValueById('add-amount');
    // console.log('add money value', addmoney)
    const addmoney = getinputFieldValueById('add-amount');
    const addpin = getinputFieldValueById('add-pin');
    console.log('add money value with parameter', addmoney, addpin)
})
