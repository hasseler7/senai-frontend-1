
function mudarH1() {

      const novaH1 = document.querySelector("h1");
      novaH1.textContent = "Olá Mundo";

}

function verificarTime() {
      let time = prompt("Digite seu time");
      if (time == "santos") {
            alert("Time do coração Santos");
      } else {
            alert("Outro time não importa");
            window.location.href = "https://www.google.com.br/?hl=pt-BR"
      }


}

document.querySelector("img").addEventListener("click", verificarTime);