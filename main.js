function moveFocus(current, event) {
  if (event.inputType === "deleteContentBackward") {
    if (current.previousElementSibling) {
      current.previousElementSibling.focus();
    }
  } else if (current.nextElementSibling) {
    current.nextElementSibling.focus();
  }
}
const otpInputs = document.querySelectorAll(".otp-input");
window.addEventListener("paste", (event) => {
  const clipboardData = event.clipboardData || window.clipboardData;
  const pastedData = clipboardData.getData("text").trim();

  console.log(pastedData);

  if (/^\d{4}$/.test(pastedData)) {
    otpInputs.forEach((input, index) => {
      input.value = pastedData[index];

      if (index < otpInputs.length - 1) {
        otpInputs[index + 1].focus();
      }
    });
  }
});
