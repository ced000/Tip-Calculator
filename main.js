const calculate = document.getElementById('callTip');
const bill = document.getElementById('bill');
const rating = document.getElementById('rating');
const people = document.getElementById('peopleNumber');

const calculateTip = () => {
    if (bill.value == '' || rating.value == 0) {
        let msg = 'Input Valid Values';
        return msg;
    } 
    if (people.value == '' || people.value <= 1) people.value = 1;
    tipValue = (bill.value*rating.value)/people.value;
    tipValue = Math.round(tipValue*100)/100;
    tipValue = "$" + tipValue.toFixed(2);
    return tipValue;
}

calculate.addEventListener('click', () => {
    const tipbar = document.querySelector('.tip-result');
    tipOrMsg = calculateTip();
    tipbar.innerHTML = `<span>${tipOrMsg}</span>`;
    tipbar.style.opacity = '1';
    tipbar.style.padding = '10px';
    tipbar.style.height = 'auto';

    setTimeout(() => {
        tipbar.style.opacity = '0';
        tipbar.style.height = '0';
        tipbar.style.padding = '0';
    }, 5000);
})