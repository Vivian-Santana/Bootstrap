/* validação do formulario */
let nome = document.getElementById('txtNome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')

function validaNome(){
    let txt = document.querySelector('#txtNome')
    if(nome.value.length < 3){
        txt.innerHTML = 'Nome inválido'
        txt.style.color = 'red'
     }else{
         txt.innerHTML = 'Nome válido'
         txt.style.color = 'green'
    }
}
function validaEmail(){
    let txtEmail = document.querySelector('#email')
    if(email.value.indexOf('@')== -1 || email.value.indexOf('.')){
        txtEmail.innerHTML = 'E-mail inválido'
        txtEmail.style.color = 'red'
    }else{
        txtEmail.innerHTML = 'E-mail inválido'
        txtEmail.style.color = 'green'
    }
}

