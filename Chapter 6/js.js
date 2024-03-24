function calculateCost() {
            const cost = parseFloat(document.getElementById("cost").value);
            const liters = parseFloat(document.getElementById("liters").value);
            const total = cost * liters;

            document.getElementById("total").innerText = "Total: AED" + total.toFixed(2);
        }
        