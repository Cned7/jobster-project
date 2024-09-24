document.querySelector(".clearFilters").addEventListener("click", () => {
  const form = document.querySelector(".filter--form");
  const inputs = form.querySelectorAll("input, select");

  inputs.forEach((input) => {
    input.value = "";
  });
});
