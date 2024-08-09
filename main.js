const otpInputs = document.querySelectorAll(".otp-input");

otpInputs.forEach((current, i) => {
  current.addEventListener("change", (event) => {
    const otp = Number(event.target.value);
    if (otp.length <= 1) return;
    otpInputs.forEach((input, index) => {
      input.value = otp || "";

      if (index < otpInputs.length - 1) {
        otpInputs[index + 1].focus();
      }
    });
  });
});

otpInputs.forEach((current, i) => {
  current.addEventListener("input", (event) => {
    const value = Number(event.target.value);
    if (isNaN(value)) {
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
  });
});

// window.addEventListener("paste", (event) => {
//   const clipboardData = event.clipboardData || window.clipboardData;
//   const pastedData = clipboardData.getData("text").trim();

//   if (/^\d{4}$/.test(pastedData)) {
//     otpInputs.forEach((input, index) => {
//       input.value = pastedData[index];

//       if (index < otpInputs.length - 1) {
//         otpInputs[index + 1].focus();
//       }
//     });
//   }
// });
