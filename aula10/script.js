formulario = document.getElementById('formulario');
username = document.getElementById('username')

formulario.addEventListener('submit', (event) => {
    event.preventDefault();

    if(username.value == '') {
        alert( 'O campo username é obrigatório');
        username.style.color = 'red';
        return;
    }
    if(username.value == 'emerson') {
        alert('Login com sucesso');
    }

} );

// mypromesse = new Promise((resolve, reject)=>{
//     setTimeout(()=> resolve('Deu certo!'), 3000)
// })

mypromesse2 = new Promise((resolve, reject)=>{
    setTimeout(()=> reject('Deu errado'), 3000)
})

mypromesse2.then(
    (msg) => console.log(msg)
).catch(
    (erro) => console.log('Erroooo: '+ erro)
)