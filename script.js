const preencherFormulario = (endereco) => {
    document.getElementById('endereco').value = endereco.logradouro;
    document.getElementById('bairro').value = endereco.bairro;
    document.getElementById('cidade').value = endereco.localidade;
    document.getElementById('estado').value = endereco.uf;
}

const pegarEndereco = async (cep) => {
    const api = `https://viacep.com.br/ws/${cep}/json/`
    const response = await fetch(api)
    const data = await response.json()

    if (data.erro) {    
        return alert('CEP inválido. Tente novamente')
    } else {
        preencherFormulario(data)
    }
    
}

cep.addEventListener('keypress', (e) => {
    const apenasNumeros = /[0-9]/
    const key = String.fromCharCode(e.keyCode)

    if (!apenasNumeros.test(key)) {
        e.preventDefault()
        return
    }
})

cep.addEventListener('keyup', (e) => {
    const inputValue = e.target.value
    if (inputValue.length === 8) {
        pegarEndereco(inputValue)
        return
    }
})