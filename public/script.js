function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

async function calculate() {
    const expression = document.getElementById('display').value;
    
    try {
        // Send calculation request to Azure Function
        const response = await fetch('/api/calculate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ expression })
        });

        const result = await response.json();
        document.getElementById('display').value = result.result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}
