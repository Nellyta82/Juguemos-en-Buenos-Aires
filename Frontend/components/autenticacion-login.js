const signUpForm = document.querySelector("#iniciar-sesion");

signUpForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Enviando..");

  const signUpEmail = document.querySelector("#email-inicio-sesion").value;
  const signUnPassword = document.querySelector(
    "#contraseña-inicio-sesion"
  ).value;

  console.log(signUpEmail, signUnPassword);
});
