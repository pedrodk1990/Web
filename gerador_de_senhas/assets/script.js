document.getElementById('generate').addEventListener('click', generatePassword);

function generatePassword() {
    const length = parseInt(document.getElementById('length').value);
    const includeLowercase = document.getElementById('includeLowercase').checked;
    const includeUppercase = document.getElementById('includeUppercase').checked;
    const includeNumbers = document.getElementById('includeNumbers').checked;
    const includeSymbols = document.getElementById('includeSymbols').checked;

    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+[]{}|;:,.<>?';

    let characterSet = '';
    if (includeLowercase) characterSet += lowercase;
    if (includeUppercase) characterSet += uppercase;
    if (includeNumbers) characterSet += numbers;
    if (includeSymbols) characterSet += symbols;

    if (characterSet.length === 0) {
        alert('Por favor, selecione pelo menos uma opção de caracteres.');
        return;
    }

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characterSet.length);
        password += characterSet[randomIndex];
    }

    document.getElementById('result').textContent = password;
}
