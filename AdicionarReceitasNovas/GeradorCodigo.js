let nomeExibido = document.querySelector("#nomeExibido");
let nomeFoto = document.querySelector("#extensaoFoto");
let extensaoFoto = document.querySelector("#nomeDaFoto");
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

gerarCodigo.addEventListener("click",function(){

    codigoGerado.innerText = `<div class="card">
    <div class="card-header" id="headingOne">
      <h2 class="mb-0">
        <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          ${nomeExibido.value}
        </button>
      </h2>
    </div>

    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
      <div class="card-body d-flex flex-column flex-sm-row">
        <img src="Imgs/${nomeFoto.value}.${extensaoFoto.value}" class="mr-4 imgsReceitas">
        <p class="my-4 my-sm-0"><span class="font-weight-bold">${nome.value}</span><br><br>

          <span class="font-weight-bold">Ingredientes:</span><br>
          <ul>
         ${ingredientesLista.innerHTML}
         </ul><br><br>
         
         <span class="font-weight-bold">Modo de preparo:</span><br>
         <ol>
         ${etapasLista.innerHTML}
         </ol><br><br>
         
         ${infoExtra.value}
         </p>
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
  ingredientesLista.innerHTML = "";
});


adicionarEtapa.addEventListener("click", function(){
  let novaEtapa = document.createElement("li");
  novaEtapa.innerText = modoDePreparo.value;
  etapasLista.appendChild(novaEtapa);
  modoDePreparo.value = "";
});

removeEtapas.addEventListener("click", function(){
  etapasLista.innerHTML = "";
});