const addJobButton = document.querySelector(".btn-success");

addJobButton.addEventListener("click", () => {
  const form = document.querySelector(".modal-body form");
  form.reset();
  const modal = new bootstrap.Modal(document.getElementById("exampleModal"));
  modal.show();
});

const deleteButtons = document.querySelectorAll(".btn-danger");

deleteButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const card = button.closest(".card");

    card.remove();
  });
});
