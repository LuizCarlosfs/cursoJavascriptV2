

// calcula a media por materia de cada aluno e cria uma propriedade chamada média
alunos.forEach(aluno => {
    aluno.media = {}

        for(let materia in aluno.notas){
            aluno.media[materia]= avarege(...aluno.notas[materia])

        }
})

// inserir no thead "nome" e cada uma das materias
const htmlHeader = document.createElement("tr")
htmlHeader.innerHTML = "<td>Nome</td>"

let htmlHeaderMaterias = Object.keys(alunos[0].notas).map(materia =>{
    console.log(materia)
return "<td>" + materia + "</td>"
}).join("")
console.log(htmlHeaderMaterias)
htmlHeader.innerHTML += htmlHeaderMaterias

document.querySelector("[data-table-alunos] thead").appendChild(htmlHeader)


// percorrer cada aluno e gerar o html para incluir no tbody
function render(){
  document.querySelector("[data-table-alunos] tbody").innerHTML=""
  alunos.forEach( aluno => {
    const htmlBody = document.createElement("tr")
    let htmlMedias = `<td>${aluno.nome}</td>`
    Object.keys(aluno.notas).forEach( materia =>{
        htmlMedias +=`<td>${aluno.media[materia]}</td>`
    })
    htmlBody.innerHTML = htmlMedias
    document.querySelector("[data-table-alunos] tbody").appendChild(htmlBody)
})
}
render()

// Adicionar alunos
document.querySelector("form").addEventListener("submit", function(e){
   e.preventDefault()   // não enviar o formulário
   const nome = document.getElementById("first_name").value
   const newAluno =  {
     _id: 0,
     nome,
     notas: {
     portugues: [1, 1, 2, 2],
     matematica: [2, 2, 2, 2],
     historia: [2, 2, 3, 3],
     ciencias: [3, 3, 3, 3],
   },
 }
   newAluno.media ={}
   
   for(let materia in newAluno.notas){
       newAluno.media[materia] = avarege(...newAluno.notas[materia])
    }

    alunos.push(newAluno)
    render()

})
