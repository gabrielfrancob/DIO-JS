const alunos = [
    {
        nome: "Gabriel",
        nota: 5,
        turma: "1B",
    },
    {
        nome: "Sofia",
        nota: 9,
        turma: "1B",
    },
    {
        nome: "Paulo",
        nota: 3,
        turma: "2C"
    }
]

function alunosAprovados(alunos, media){
    let aprovados = []
    
    for(item in alunos){
        let {nota, nome} = alunos[item]

        if(nota >= media){
            aprovados.push(nome)
        }
    }

    return aprovados
}


console.log(alunosAprovados(alunos, 5))