const display = document.getElementById('display');

function appendToDisplay(value) {
    if (display.value === 'Error' || (display.value === '0' && value !== '.' && !isOperator(value))) {
        display.value = value;
    } else {
        display.value += value;
    }
}

function isOperator(value) {
    return ['/', '*', '-', '+'].includes(value);
}

function clearDisplay() {
    display.value = '';
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function performCalculation(expression) {
    try {
        // Perhatian: Penggunaan 'new Function' bisa berisiko jika input tidak aman.
        // Untuk kalkulator sederhana ini, ini adalah pendekatan umum.
        // Solusi yang lebih aman akan melibatkan parser ekspresi matematika.
        const result = new Function(`return ${expression}`)();

        // Tangani kasus pembagian dengan nol atau hasil non-numerik
        return isNaN(result) || !isFinite(result) ? 'Error' : result;
    } catch (error) {
        console.error('Calculation Error:', error);
        return 'Error';
    }
}

function calculateResult() {
    if (display.value === '' || display.value === 'Error') {
        return;
    }

    display.value = performCalculation(display.value);
}

// Ekspor fungsi untuk pengujian jika menggunakan modul Node.js (opsional untuk setup sederhana ini)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { performCalculation };
}