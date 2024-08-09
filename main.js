const otpInputs = document.querySelectorAll(".otp-input");
const otpInput = document.getElementById("otp");

otpInput.addEventListener("change", (e) => {
  const otp = e.target.value;
  alert(otp)
  otpInputs.forEach((input, index) => {
    input.value = otp[index] || "";
    alert(index, otp[index] || "")

    if (index < otpInputs.length - 1) {
      otpInputs[index + 1].focus();
    }
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
      if (current.previousElementSibling) {
        current.previousElementSibling.focus();
      }
    } else if (current.nextElementSibling) {
      current.nextElementSibling.focus();
    }

    otpInput.value = [...otpInputs].reduce((opt, input) => {
      return `${opt}${input.value}`;
    }, "");
    otpInput.dispatchEvent(new Event("change"));
  });
});

window.addEventListener("paste", (event) => {
  const clipboardData = event.clipboardData || window.clipboardData;
  const pastedData = clipboardData.getData("text").trim();

  if (/^\d{4}$/.test(pastedData)) {
    otpInputs.forEach((input, index) => {
      input.value = pastedData[index];

      if (index < otpInputs.length - 1) {
        otpInputs[index + 1].focus();
      }
    });
  }
});
