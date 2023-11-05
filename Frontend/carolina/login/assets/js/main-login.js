const $btnSingIn = document.querySelector(".sing__in__btn"),
  $btnSingUp = document.querySelector(".sing__up__btn"),
  $singUp = document.querySelector(".sing__up"),
  $singIn = document.querySelector("sing__in");

//evento clic si es llamado con el botón de iniciar sesión o el de registrarse
document.addEventListener("click", (e) => {
  if (e.target === $btnSingIn || e.target === $btnSingUp) {
    $singIn.classList.toggle("active");
    $singUp.classList.toggle("active");
  }
});
