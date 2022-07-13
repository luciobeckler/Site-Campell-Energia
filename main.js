var respostasForms = []; //LISTA DE OBJETOS CONTENDO AS RESPOSTAS DOS FORMULÁRIOS
function geraFormFull() {
    var valorNome = document.getElementById("formFull_name");
    var valorEmail = document.getElementById("formFull_email");
    var valorTelefone = document.getElementById("formFull_phone");
    var valorAssunto = document.getElementById("formFull_subject");
    var valorMensagem = document.getElementById("formFull_message");
    var valorGasto = document.getElementById("formFull_spent");
    var formFullAux = {
        name: valorNome.value,
        email: valorEmail.value,
        telefone: parseInt(valorTelefone.value),
        assunto: valorAssunto.value,
        mensagem: valorMensagem.value,
        gasto: parseInt(valorGasto.value)
    };
    respostasForms.push(formFullAux);
    console.log(respostasForms);
}
function geraFormBasico() {
    var valorNome = document.getElementById("formBasic_name");
    var valorEmail = document.getElementById("formBasic_email");
    var valorTelefone = document.getElementById("formBasic_phone");
    var valorAssunto = document.getElementById("formBasic_subject");
    var formBasicAux = {
        name: valorNome.value,
        email: valorEmail.value,
        telefone: parseInt(valorTelefone.value),
        assunto: valorAssunto.value
    };
    respostasForms.push(formBasicAux);
    console.log(respostasForms);
}
//ADICIONA EVENTO DE CAPTURA NOs BOTÕES
var basicSendButton = document.getElementById("formBasic_send");
basicSendButton.addEventListener("mouseover", geraFormBasico);
var fullSendButton = document.getElementById("formFull_send");
fullSendButton.addEventListener("mouseover", geraFormFull);
