function appendToDisplay(value) {
            const display = document.getElementById("display");
            if (value === '.' && display.value.includes('.')) return; // evita múltiplos pontos
            display.value += value;
        }

        function clearDisplay() {
            document.getElementById("display").value = '';
        }

        function calculateResult() {
            const display = document.getElementById("display");
            try {
                display.value = eval(display.value);
            } catch {
                display.value = "Erro!";
            }
        }