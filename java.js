/* 2) Faça um código que receba um usuário e uma senha inseridos em um formulário
 e verifique se estão corretos. Exiba uma mensagem de sucesso se ambos estiverem corretos 
 ou de erro caso estejam incorretos. Para esse exercício, vamos considerar que o usuário 
 correto é admin e a senha correta é 12345.

 */

document.querySelector("#login").addEventListener("submit", function (event) {
  event.preventDefault();

  const user = document.getElementById("user").value.trim();
  const password = document.getElementById("password").value.trim();
  const alerta = document.getElementById("alerta");

  /* Validação dos campos */

  if (user === "admin" && password === "12345") {
    alerta.textContent =
      "sucesso: Todos os campos foram preenchidos corretamente!";
    alerta.className = "success";
    return;
  } else if (user === "" && password === "") {
    alerta.textContent = "Errado: Precisa preencher todods os campos!";
    alerta.className = "error";
    return;
  } else {
    user != "admin" && password != "12345";
    alerta.textContent = "Errado: Login não está correto!";
    alerta.className = "error";
    return;
  }
});
