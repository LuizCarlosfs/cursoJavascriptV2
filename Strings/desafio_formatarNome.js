function formatarNome(nomeCompleto) {
    const primeiroEspaco = nomeCompleto.indexOf(" ")
    const primeiroNome = nomeCompleto.substring(0,primeiroEspaco)
    const sobreNome = nomeCompleto.substring(primeiroEspaco)

    if (primeiroEspaco < 0) {
       return nomeCompleto.trim()
    } else {
      return sobreNome.trim() +", " + primeiroNome
    }

}


console.log(formatarNome("Daniel"))
console.log(formatarNome("Daniel Morales"))
console.log(formatarNome("Daniel Tapias Morales"))
