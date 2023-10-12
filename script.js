document.addEventListener("DOMContentLoaded", function () {
    const addDestinationButton = document.getElementById("addDestination");
    const destinationList = document.getElementById("destinationList");

    addDestinationButton.addEventListener("click", function () {
        const placeInput = document.getElementById("place");
        const dateInput = document.getElementById("date");

        const place = placeInput.value.trim();
        const date = dateInput.value;

        if (place && date) {
            const listItem = document.createElement("li");
            listItem.innerHTML = `
                ${place} - ${date}
                <button class="delete-button">Delete</button>
            `;

            destinationList.appendChild(listItem);

            placeInput.value = "";
            dateInput.value = "";

            const deleteButton = listItem.querySelector(".delete-button");
            deleteButton.addEventListener("click", function () {
                destinationList.removeChild(listItem);
            });
        }
    });
});
