
let contrato = document.getElementById("contrato")
let cad = document.getElementById("cadastro")
cad.style.display = "none"

function enableOrDisableButton() {
    if (contrato.Checked=true) {
        cad.style.display = "block"

    } else {
        cad.style.display = "none"
        //alert("false")
    }
}

function cadastrar() {
  alert("cadastrar e_mail")
}

