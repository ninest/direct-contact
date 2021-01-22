const $countryCodeField: HTMLInputElement = document.querySelector("#code");
const $phoneNumberField: HTMLInputElement = document.querySelector("#phone");
const $chatButton = document.querySelector("#chat");

$chatButton.addEventListener("click", () => {
  alert($countryCodeField.value);
});
