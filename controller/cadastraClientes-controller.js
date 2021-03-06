import { clienteService } from "../service/cliente-service.js";

const formulario = document.querySelector("[data-form]");

formulario.addEventListener("submit", async (event) => {
  event.preventDefault();
  try {
    const nome = event.target.querySelector("[data-nome]").value;
    const email = event.target.querySelector("[data-email]").value;

    await clienteService.criaCliente(nome, email);
    window.location.href = "../screens/cadastro_concluido.html";
  } catch (erro) {
    console.log(erro);
    window.location.href = "../screens/erro.html";
  }
});
