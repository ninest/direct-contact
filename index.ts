const $countryCodeField: HTMLInputElement = document.querySelector("#code");
const $phoneNumberField: HTMLInputElement = document.querySelector("#phone");
const $form = document.querySelector("#form");

$form.addEventListener("submit", (e) => {
  e.preventDefault();
  
  const countryCode = $countryCodeField.value;
  const phoneNumber = $phoneNumberField.value;

  // Both are required
  if (!countryCode || !phoneNumber) return;

  // Save country code
  localStorage.setItem("country-code", countryCode);

  const fullContactNumber = `${countryCode}${phoneNumber}`.replace(
    /[^0-9]/g,
    ""
  );

  console.log(fullContactNumber);
  const url = `https://web.whatsapp.com/send?phone=${countryCode}${phoneNumber}`;
  window.open(url, "_blank");
});

window.addEventListener("load", () => {
  console.log("aer");

  // Set saved country code
  $countryCodeField.value = localStorage.getItem("country-code");
});
