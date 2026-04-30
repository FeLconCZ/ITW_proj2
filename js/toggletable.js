function toggleTable() {
            const table = document.getElementById("specs");
            const button = document.querySelector("button");

            if (table.style.display === "none" || table.style.display === "") {
                table.style.display = "table";
                button.textContent = "Hide specs";
            } else {
                table.style.display = "none";
                button.textContent = "Show specs";
            }
        }