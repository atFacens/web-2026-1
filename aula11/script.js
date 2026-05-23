const idUser = document.getElementById('iduser')
const btnBuscar = document.getElementById('btnbuscar')
const output = document.getElementById('output')

function buscarUser() {
    fetch('https://jsonplaceholder.typicode.com/users/' + idUser.value)
    .then(
        (resposta) => {
            if(resposta.status == 404) {
                output.value = 'usuário não encontrado'
            } else {
                objeto = resposta.json()
                .then(
                    (dados) => {
                        output.value = dados['name']
                    }
                )
            }

        }
    )

}

btnBuscar.addEventListener('click', buscarUser)