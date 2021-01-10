window.addEventListener("DOMContentLoaded", () => {});

document.getElementById("form-notify").addEventListener("submit", function (e) {
  e.preventDefault();
  if (this.email.checkValidity()) {
    this.email.classList.remove("error");
  } else {
    this.email.classList.add("error");
  }
});
