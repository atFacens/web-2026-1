const idUser = document.getElementById('iduser')
const btnBuscar = document.getElementById('btnbuscar')
const output = document.getElementById('output')

async function buscarUser(evento) {
    evento.preventDefault()
    let resposta = await fetch(`https://jsonplaceholder.typicode.com/users/${idUser.value}` )
    console.log(resposta);
    
    if(resposta.status == 200) {
        let dados = await resposta.json()
        outputName.value = dados['name']
        outputEmail.value = dados['email']
        outputCity.value = dados['address']['city']
    } else {
        output.value = 'usuário não encontrado'
    }

}

btnBuscar.addEventListener('click', buscarUser)