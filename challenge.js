<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <title>Find Maximum</title>

    <!-- JavaScript file embedded in same HTML -->
    <script defer>
        function findMaximum() {
            // 1. Get values as numbers
            let num1 = document.getElementById("input1").valueAsNumber;
            let num2 = document.getElementById("input2").valueAsNumber;
            let num3 = document.getElementById("input3").valueAsNumber;

            // 2. Compute the maximum
            let maxValue = num1; // assume num1 is max
            if (num2 > maxValue) {
                maxValue = num2;
            }
            if (num3 > maxValue) {
                maxValue = num3;
            }

            // 3. Display result
            document.getElementById("result").innerHTML =
                "Maximum value is: " + maxValue;
        }

        // Attach event listener once page loads
        document.addEventListener("DOMContentLoaded", function () {
            document
                .getElementById("calcButton")
                .addEventListener("click", findMaximum);
        });
    </script>
</head>

<body>
    <h1>Find the Maximum of Three Numbers</h1>

    <p>Enter three numbers below:</p>

    <input id="input1" type="number" />
    <input id="input2" type="number" />
    <input id="input3" type="number" />

    <br /><br />

    <button id="calcButton">Find Maximum</button>

    <p id="result"></p>
</body>
</html>
