// Get the "Add job" button element
const addJobButton = document.querySelector(".btn-success");

// Add a click event listener to the "Add job" button
addJobButton.addEventListener("click", () => {
  // Get the form element
  const form = document.querySelector(".modal-body form");

  // Reset the form
  form.reset();

  // Show the modal
  const modal = new bootstrap.Modal(document.getElementById("exampleModal"));
  modal.show();
});

// Get all "Delete" buttons
const deleteButtons = document.querySelectorAll(".btn-danger");

// Add a click event listener to each "Delete" button
deleteButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Get the card element
    const card = button.closest(".card");

    // Remove the card element
    card.remove();
  });
});
