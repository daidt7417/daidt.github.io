const otpInputs = document.querySelectorAll(".otp-input");

otpInputs.forEach((current) => {
  current.addEventListener("input", (event) => {
    const value = Number(event.target.value);
    if (isNaN(value)) {
      current.value = "";
      event.preventDefault();
      return;
    }

    if (event.inputType === "deleteContentBackward") {
      if (current.previousElementSibling) {
        current.previousElementSibling.focus();
      }
    } else if (current.nextElementSibling) {
      current.nextElementSibling.focus();
    }

    if (index === 0) {
      otpInputs.forEach((input, index) => {
        input.value = otp[index] || "";
        if (index < otpInputs.length - 1 && otp[index]) {
          otpInputs[index + 1].focus();
        }
      });
    }
  });
});

window.addEventListener("paste", (event) => {
  const clipboardData = event.clipboardData || window.clipboardData;
  const pastedData = clipboardData.getData("text").trim();
  alert(pastedData);

  if (/^\d{4}$/.test(pastedData)) {
    otpInputs.forEach((input, index) => {
      input.value = pastedData[index];

      if (index < otpInputs.length - 1) {
        otpInputs[index + 1].focus();
      }
    });
  }
});
