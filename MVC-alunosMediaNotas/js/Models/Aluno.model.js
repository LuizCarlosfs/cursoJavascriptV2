class AlunoModel{
    constructor({nome, _id, notas} = {notas:{} }){
          this.nome = nome
          this._id = (_id !== undefined) ? _id : this.generatedId()
          this.notas = {...notas}

          if(this.id > AlunoModel.maxId) {
             AlunoModel.maxId = this._id
          }
          this.media = {}

          this.generateAvarege()



    }
    generatedId(){
         return AlunoModel.maxId + 1
    }
    generateAvarege(){
       for (let materia in this.notas) {
          this.media[materia] = avarege(...this.notas[materia])
       }
    }
}

AlunoModel.maxId = 0