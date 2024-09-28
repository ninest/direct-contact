const $countryCodeField: HTMLInputElement = document.querySelector("#code");
const $phoneNumberField: HTMLInputElement = document.querySelector("#phone");
const $messageField: HTMLInputElement = document.querySelector("#message");
const $form = document.querySelector("#form");

$form.addEventListener("submit", (e) => {
  e.preventDefault();

  const countryCode = $countryCodeField.value;
  const phoneNumber = $phoneNumberField.value;
  const message = $messageField.value;

  const urlValidMessage: string = encodeURIComponent(message);

  // Both are required
  if (!countryCode || !phoneNumber) return;

  // Save country code
  localStorage.setItem("country-code", countryCode);

  const fullContactNumber = `${countryCode}${phoneNumber}`.replace(
    /[^0-9]/g,
    ""
  );

  const webUrl = `https://web.whatsapp.com/send?phone=${countryCode}${phoneNumber}/?text=${urlValidMessage}`;
  const mobileUrl = `https://wa.me/${countryCode}${phoneNumber}/?text=${urlValidMessage}`;
  window.open(mobileUrl, "_blank");
});

window.addEventListener("load", () => {
  // Set saved country code
  $countryCodeField.value = localStorage.getItem("country-code");
});
