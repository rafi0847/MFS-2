function getInputfieldValueById(id) {
    const inputvalue = document.getElementById(id).value
    const inputnumber = parseFloat(inputvalue);
    return inputnumber
}

function getTextFieldValueById(id) {
    const textvalue = document.getElementById(id).innerText;
    const textnumber = parseFloat(textvalue);
    return textnumber
}


function showSectionById(id) {
    document.getElementById('add-money-form').classList.add('hidden');
    document.getElementById('cash-out-form').classList.add('hidden');
    document.getElementById('transaction-form').classList.add('hidden');
    
    document.getElementById(id).classList.remove('hidden');
}