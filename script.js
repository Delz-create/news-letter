const form = document.querySelector('form');
const card = document.querySelector('.card');
const popup = document.querySelector('.successful-msg');
const closeBtn = document.querySelector('.successful-btn');
const emailInput = document.querySelector('input');

form.addEventListener('submit', () => {
    event.preventDefault();

    const email = emailInput.value;

    if (!isValidEmail(email)){
        textArea = `Valid email required!`;
        emailInput.style.border = '1px solid tomato';
        emailInput.style.backgroundColor = '#fadad7';
    } else {
        popUp = `${email}`;
        card.style.display = 'none';
        popup.style.display = 'block';        
    }
    document.querySelector('.emailHolder').innerHTML = popUp;
    document.querySelector('.textArea').innerHTML = textArea;
    return;
});

closeBtn.addEventListener('click', () => {
        card.style.display = 'flex';
        popup.style.display = 'none';
    });


function isValidEmail(email) {
    const pattern = /^[^\s@]+@(gmail\.com|hotmail\.com|yahoo\.com)$/;
    return pattern.test(email);
}