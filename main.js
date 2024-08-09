const otpInputs = document.querySelectorAll(".otp-input");

otpInputs.forEach((current, i) => {
  current.addEventListener("change", (event) => {
    const otp = String(event.target.value);

    if (otp.length <= 3) {
      current.value = otp[0] || "";
      return;
    }

    otpInputs.forEach((input, index) => {
      input.value = otp[index] || "";

      if (index < otpInputs.length - 1) {
        otpInputs[index + 1].focus();
      }
    });
  });
});

otpInputs.forEach((current, i) => {
  current.addEventListener("input", (event) => {
    event.preventDefault();
    const value = event.target.value;
    if (isNaN(Number(value))) {
      current.value = "";
      event.preventDefault();
      return;
    }

    if (event.inputType === "deleteContentBackward") {
      if (
        current.previousElementSibling &&
        current.previousElementSibling.id !== "otp"
      ) {
        current.previousElementSibling.focus();
      }
    } else if (current.nextElementSibling) {
      current.nextElementSibling.focus();
    }

    if (i + 1 === otpInputs.length) {
      otpInputs[i].dispatchEvent(new Event("change"));
    }
  });
});
