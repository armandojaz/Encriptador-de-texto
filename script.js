let originalText = '';

function encrypt() {
    const input = document.getElementById('input').value;
    if (input) {
        originalText = input; // Guardar el texto original
        const encryptedText = btoa(input); // Simple base64 encoding
        displayResult(encryptedText);
    } else {
        alert("Por favor, ingresa algún texto para encriptar.");
    }
}

function decrypt() {
    if (originalText) {
        displayResult(originalText); // Mostrar el texto original
    } else {
        alert("Por favor, encripta algún texto primero.");
    }
}

function displayResult(text) {
    document.getElementById('rectangle-result-text').innerText = text;
    document.getElementById('waiting-state').style.display = 'none';
    document.getElementById('result-state').style.display = 'block';
}
