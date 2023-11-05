const $btnSingIn = document.querySelector(".sign-in-btn"),
  $btnSingUp = document.querySelector(".sign-up-btn"),
  $singUp = document.querySelector(".sign-up"),
  $singIn = document.querySelector(".sign-in");

//evento clic si es llamado con el botón de iniciar sesión o el de registrarse
document.addEventListener("click", (e) => {
  if (e.target === $btnSingIn || e.target === $btnSingUp) {
    $singIn.classList.toggle("active");
    $singUp.classList.toggle("active");
  }
});
