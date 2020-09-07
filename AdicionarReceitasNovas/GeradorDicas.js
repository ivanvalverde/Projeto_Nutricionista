
let nomeExibido = document.querySelector("#nomeDicaExibida");
let gerarCodigo = document.querySelector("#gerarCodigo");
let codigoGerado = document.querySelector("#codigoGerado");
let extensoes = document.querySelector("#extensoes");
let hintNumber = document.querySelector("#hintNumber");
let adicionaTexto = document.querySelector("#adicionaTexto");
let adicionaImagem = document.querySelector("#adicionaImagem");
let textoDicas = document.querySelector("#textoDicas");
let nomeImagem = document.querySelector("#nomeImagem");
let visualizador = document.querySelector("#visualizador");
let apagaTudo = document.querySelector("#apagaTudo");
let comprimento = document.querySelector("#comprimento");
let guardaTexto = "";

gerarCodigo.addEventListener("click",function(){

  codigoGerado.innerText = `
  <div class="accordion w-100" id="accordionExample">
        <div class="card">
          <div class="card-header" id="heading${hintNumber.value}">
            <h2 class="mb-0">
              <button class="btn btn-link btn-block text-left colorBtn" type="button" data-toggle="collapse"
                data-target="#collapse${hintNumber.value}" aria-expanded="true" aria-controls="collapse${hintNumber.value}">
                ${nomeExibido.value}
              </button>
            </h2>
          </div>
          <div id="collapse${hintNumber.value}" class="collapse" aria-labelledby="heading${hintNumber.value}" data-parent="#accordionExample">
          <br>
          <div class="card-dicas p-3 d-flex flex-column">
          ${guardaTexto}
          </div>
          <div class="card-dicas p-3">
              
              <p class="font-weight-bold mr-auto">
                Julia Devens
              </p>
          </div>
          </div>
        </div>
  `

});

adicionaTexto.addEventListener("click", function(){
  let pulaLinha = document.createElement("br");
  let pulaLinhaAux = document.createElement("p");

  guardaTexto += `<p>${textoDicas.value}</p><br>`;
  visualizador.innerHTML+= textoDicas.value;
  visualizador.appendChild(pulaLinha);
  visualizador.appendChild(pulaLinhaAux);
  textoDicas.value = "";
});

adicionaImagem.addEventListener("click", function(){
  let pulaLinha = document.createElement("br");
  let pulaLinhaAux = document.createElement("p");

  guardaTexto += `<img src="Imgs/${nomeImagem.value}.${extensoes.value}" style="width:${comprimento.value}; margin: auto;"><br>`;
  visualizador.innerHTML+= `<img src="../Imgs/${nomeImagem.value}.${extensoes.value}" style="width:${comprimento.value}; margin: auto;"><br>`;
  visualizador.appendChild(pulaLinha);
  visualizador.appendChild(pulaLinhaAux);
  textoDicas.value = "";
});

apagaTudo.addEventListener("click", function(){
  guardaTexto= "";
  visualizador.innerHTML= "";
});