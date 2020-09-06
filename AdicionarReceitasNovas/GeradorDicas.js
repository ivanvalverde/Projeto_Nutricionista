
let nomeExibido = document.querySelector("#nomeExibido");
let nomeFoto = document.querySelector("#nomeDaFoto");
let extensaoFoto = document.querySelector("#extensaoFoto");
let nome = document.querySelector("#nome");
let ingredientes = document.querySelector("#ingredientes");
let modoDePreparo = document.querySelector("#modoDePreparo");
let infoExtra = document.querySelector("#infoExtra");
let gerarCodigo = document.querySelector("#gerarCodigo");
let codigoGerado = document.querySelector("#codigoGerado");
let ingredientesLista = document.querySelector("#ingredientesLista");
let adicionarIngrediente = document.querySelector("#adicionarIngrediente");
let removeIngredientes = document.querySelector("#removeIngredientes");
let etapasLista = document.querySelector("#etapasLista");
let adicionarEtapa = document.querySelector("#adicionarEtapa");
let removeEtapas = document.querySelector("#removeEtapas");
let extensoes = document.querySelector("#extensoes");

gerarCodigo.addEventListener("click",function(){

  codigoGerado.innerText = `
  <div class="card">
        <div class="card-header" id="headingTwo">
          <h2 class="mb-0">
            <button class="btn btn-link btn-block text-left colorBtn" type="button" data-toggle="collapse"
              data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
              ${nomeDica.value}
            </button>
          </h2>
        </div>

        <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
          <div class="card-dicas p-3 d-flex flex-column ">
            <p>
              “comer de 3 em 3 horas”, “dieta low carb”, “dieta do ovo”, “jejum intermitente”, “não não, é comer só
              quando tem fome”….complete a frase como quiser, mas saiba de uma coisa: pode ser que amanhã nada disso
              mais “vale”!
            </p>
            
            <img src="./Imgs/dicasModa.jpg" alt="interrogação" class="w-100 p-5 align-self-center imgsDicasTwo">

            <p class="font-weight-bold mr-auto">
              Julia Devens
            </p>
          </div>
        </div>
      </div>
  `

});

adicionarIngrediente.addEventListener("click", function(){
  let novoIngrediente = document.createElement("li");
  novoIngrediente.innerText = ingredientes.value;
  ingredientesLista.appendChild(novoIngrediente);
  ingredientes.value = "";
});

removeIngredientes.addEventListener("click", function(){
  ingredientesLista.removeChild(ingredientesLista.lastElementChild);
});


adicionarEtapa.addEventListener("click", function(){
  let novaEtapa = document.createElement("li");
  novaEtapa.innerText = modoDePreparo.value;
  etapasLista.appendChild(novaEtapa);
  modoDePreparo.value = "";
});

removeEtapas.addEventListener("click", function(){
  etapasLista.removeChild(etapasLista.lastElementChild);
});

function retornaExtensao(){
  if(extensaoFoto.value != ""){
    return extensaoFoto.value;
  } else{
    return extensoes.value;
  }
}