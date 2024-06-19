$(document).ready(function () {
    $('#cep').mask('00000-000');
    $('#btn-buscar-cep').on("click", function () {
        //AJAX - Asynchronous Javascript and XML 

        const cep = $('#cep').val();
        const endpoint = `https://viacep.com.br/ws/${cep}/json/`
        $(this).find('i').addClass('d-none');
        $(this).find('span').removeClass('d-none');

        fetch(endpoint).then(function (resposta) {

            return resposta.json()
        }).then(function (json) {

            const logradouro = json.logradouro;
            const bairro = json.bairro;
            const cidade = json.localidade;
            const estado = json.uf;
            const endereco = `${logradouro}, ${bairro} - ${cidade} -  ${estado}`;

            $('#endereco').val(endereco);

            $('#btn-buscar-cep').find('i').removeClass('d-none');
            $('#btn-buscar-cep').find('span').addClass('d-none');

        }).catch(function (erro) {
            alert("Ocorreu um erro ao buscar o endereço, tente novamente mais tarde!")

        }).finally(function () {

            $('#btn-buscar-cep').find('i').removeClass('d-none');
            $('#btn-buscar-cep').find('span').addClass('d-none');
        })

    })
})