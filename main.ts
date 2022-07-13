interface formBasic{  //PRIMEIRO FORMULÁRIO QUE APARECE NO SITE
      name:string,
      email:string,
      telefone:number,
      assunto:string;
}

interface formFull extends formBasic{  //SEGUNDO FORMULÁRIO QUE APARECE NO 
      mensagem:string,
      gasto:number;
}

var respostasForms:any=[];  //LISTA DE OBJETOS CONTENDO AS RESPOSTAS DOS FORMULÁRIOS


function geraFormFull(){ //FUNÇÃO QUE CAPTURA AS RESPOSTAS DOS FORMS
     
            var valorNome=document.getElementById("formFull_name") as HTMLInputElement;
            var valorEmail=document.getElementById("formFull_email") as HTMLInputElement ;
            var valorTelefone=document.getElementById("formFull_phone") as HTMLInputElement ;
            var valorAssunto=document.getElementById("formFull_subject") as HTMLInputElement ;
            var valorMensagem=document.getElementById("formFull_message") as HTMLInputElement ;
            var valorGasto=document.getElementById("formFull_spent") as HTMLInputElement ;

            const formFullAux: formFull= {
                  name: valorNome.value,
                  email: valorEmail.value,
                  telefone: parseInt (valorTelefone.value),
                  assunto: valorAssunto.value,
                  mensagem: valorMensagem.value,
                  gasto:parseInt(valorGasto.value),
            }
            respostasForms.push(formFullAux)
            console.log(respostasForms)
      }

function geraFormBasico(){ //FUNÇÃO QUE CAPTURA AS RESPOSTAS DOS FORMS
     
      var valorNome=document.getElementById("formBasic_name") as HTMLInputElement;
      var valorEmail=document.getElementById("formBasic_email") as HTMLInputElement ;
      var valorTelefone=document.getElementById("formBasic_phone") as HTMLInputElement ;
      var valorAssunto=document.getElementById("formBasic_subject") as HTMLInputElement ;
      const formBasicAux: formBasic= {
            name: valorNome.value,
            email: valorEmail.value,
            telefone: parseInt (valorTelefone.value),
            assunto: valorAssunto.value,
      }
      respostasForms.push(formBasicAux)
      console.log(respostasForms)
}

//ADICIONA EVENTO DE CAPTURA NOs BOTÕES
var basicSendButton = document.getElementById("formBasic_send") as HTMLButtonElement;
basicSendButton.addEventListener("mouseover",geraFormBasico);

var fullSendButton = document.getElementById("formFull_send") as HTMLButtonElement;
fullSendButton.addEventListener("mouseover", geraFormFull);

