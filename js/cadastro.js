let bancoUsuarios = []

function cadastrarUsuario (nome, usuario, email, senha) {

    let novoUsuario = {
        nome: nome,
        usuario: usuario,
        email: email,
        senha: senha,
    }

    if (bancoUsuarios.length == 0 ) {
        bancoUsuarios.push(novoUsuario)
        return alert("Usuario cadastrado com sucesso")

    } else {

        for (let i in bancoUsuarios) {
            if (bancoUsuarios[i].usuario != usuario && bancoUsuarios[i].email != email) {
                bancoUsuarios.push(novoUsuario)
                return alert("usuario cadastrado com sucesso")
            } else {
                return alert("Nome do usuario ou email ja existem!")
            }
        }

    }

}

function cadastrar() {
    
    let nome = document.getElementById("nome").value
    let usuario = document.getElementById("usuario").value
    let email = document.getElementById("email").value
    let senha = document.getElementById("senha").value

    cadastrarUsuario(nome, usuario, email, senha)

    document.getElementById("nome").value = ""
    document.getElementById("usuario").value = ""
    document.getElementById("email").value = ""
    document.getElementById("senha").value = ""

}




console.log(bancoUsuarios)