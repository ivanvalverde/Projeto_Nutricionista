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
let recipeNumber = document.querySelector("#recipeNumber");

gerarCodigo.addEventListener("click",function(){

    codigoGerado.innerText = `<div class="card">
    <div class="card-header" id="heading${recipeNumber.value}">
      <h2 class="mb-0">
        <button class="btn btn-link btn-block text-left colorBtn" type="button" data-toggle="collapse" data-target="#collapse${recipeNumber.value}" aria-expanded="true" aria-controls="collapse${recipeNumber.value}">
          ${nomeExibido.value}
        </button>
      </h2>
    </div>

    <div id="collapse${recipeNumber.value}" class="collapse" aria-labelledby="heading${recipeNumber.value}" data-parent="#accordionExample">
      <div class="card-body d-flex flex-column flex-sm-row">
        <img src="Imgs/${nomeFoto.value}.${retornaExtensao()}" class="mr-4 imgsReceitas">
        <div class="d-flex flex-column">
        <p class="my-4 my-sm-0 font-weight-bold">${nome.value}</p><br>

          <div class="d-flex flex-lg-row flex-column">
          <div class="d-flex flex-column mr-5">
          <p class="font-weight-bold">Ingredientes:</p><br>
          <ul class="ingredients">
         ${ingredientesLista.innerHTML}
         </ul></div><br><br>
         
         <div class="d-flex flex-column">
         <p class="font-weight-bold">Modo de preparo:</p><br>
         <ol class="prepare mr-4">
         ${etapasLista.innerHTML}
         </ol></div></div><br>
         <p>
         ${infoExtra.value}
         </p>
         </div>
      </div>
    </div>
  </div>`

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