document.getElementById("btnEnviar").addEventListener("click", validaFormulario)

function validaFormulario(){
  if(document.getElementById("nome").value != "" && 
    document.getElementById("email").value != "" &&
    document.getElementById("telefone").value != ""){
      alert("Prontinho! Você receberá nossas mensagens por e-mail!")
  }else{
      alert("Por favor, preencha os campos nome e e-mail!")
  }
}

