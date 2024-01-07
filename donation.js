function formatCardNumber(input) {
  
    let cardNumber = input.value.replace(/\D/g, '');

    
    cardNumber = cardNumber.replace(/(\d{4})/g, '$1 ').trim();

   
    input.value = cardNumber;
}

function formatExpiry(input) {
    let value = input.value.replace(/\D/g, '');
    if (value.length > 2) {
        input.value = `${value.slice(0, 2)}/${value.slice(2)}`;
    }
}

document.getElementById('creditCardNumber').addEventListener('input', function() {
    formatCardNumber(this);
});

document.getElementById('expiry').addEventListener('input', function() {
    formatExpiry(this);
});

function submitCard() {
    let cardNumber = document.getElementById("creditCardNumber").value.replace(/\s+/g, '');
    let expiry = document.getElementById("expiry").value;
    let cvc = document.getElementById("cvc").value;

    if (cardNumber.length !== 16) {
        alert("Please enter a valid 16-digit card number.");
        return;
    }

    let [month, year] = expiry.split('/');
    if (!/^(0[1-9]|1[0-2])$/.test(month) || !/^\d{2}$/.test(year)) {
        alert("Please enter a valid expiration date in MM/YY format.");
        return;
    }

    if (!/^\d{3}$/.test(cvc)) {
        alert("Please enter a valid 3-digit CVC.");
        return;
    }

    console.log("Valid card details:", cardNumber, expiry, cvc);
}