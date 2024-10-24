/* 2) Faça um código que receba um usuário e uma senha inseridos em um formulário
 e verifique se estão corretos. Exiba uma mensagem de sucesso se ambos estiverem corretos 
 ou de erro caso estejam incorretos. Para esse exercício, vamos considerar que o usuário 
 correto é admin e a senha correta é 12345.

 */

document.querySelector("#login").addEventListener("submit", function (event) {
  event.preventDefault();

  const user = document.getElementById("user").value;
  const password = document.getElementById("password").value;
  const alerta = document.getElementById("alerta");

  /* Validação dos campos */

  if (user === "admin" && password === "12345") {
    alerta.textContent =
      "sucesso: Todos os campos foram preenchidos corretamente!";
    alerta.className = "success";
  } else if (user !== "admin" && password !== "12345") {
    alerta.textContent = "Errado: Usuário ou senha está incorreto";
    alerta.className = "error";
  } else {
    alerta.textContent = "Errado: você deve preencher todos os campos";
    alerta.className = "error";
  }
  return;
});
