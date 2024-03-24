const inputField = document.getElementById('inputField');
const checkTypeBtn = document.getElementById('checkTypeBtn');
const resultParagraph = document.getElementById('result');
const refreshBtn = document.getElementById('refreshBtn');
const Credentials = document.getElementById('Credentials');

function getCredentials() {
    const username = prompt('Enter your username:');
    const passcode = prompt('Enter your passcode:');

    if (username && passcode) {
        Credentials.innerHTML = `Username: ${username}\nPasscode: ${passcode}`;
        document.getElementById('checkTypeBtn').style.display = 'block';
    } else {
        alert('Please enter both username and passcode to continue!')
    }
};

checkTypeBtn.onclick = () => {
    const userInput = prompt('Please enter a value:');
    if (userInput === '') {
        resultParagraph.innerHTML = 'Please enter a value.';
        return;
    }

    let inputType = typeof userInput;

    if (inputType === 'string') {
        if (!isNaN(parseFloat(userInput))) {
            resultParagraph.innerHTML = 'The data is a number.';
        } else {
            resultParagraph.innerHTML = 'The data is a string.';
        }
    } else if (inputType === 'number') {
        resultParagraph.innerHTML = 'The data is a number.';
    }
};