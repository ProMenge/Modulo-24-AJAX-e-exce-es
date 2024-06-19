$(document).ready(function () {
    $('#cep').mask('00000-000');
    $('#btn-buscar-cep').on("click", function () {
        //AJAX - Asynchronous Javascript and XML 

        const cep = $('#cep').val();
        const endpoint = `https://viacep.com.br/ws/${cep}/json`
        $(this).find('i').addClass('d-none');
        $(this).find('span').removeClass('d-none');

        $.ajax(endpoint).done(function (resposta) {

            const logradouro = resposta.logradouro;
            const bairro = resposta.bairro;
            const cidade = resposta.localidade;
            const estado = resposta.uf;
            const endereco = `${logradouro}, ${bairro} - ${cidade} -  ${estado}`;

            $('#endereco').val(endereco);

            $('#btn-buscar-cep').find('i').removeClass('d-none');
            $('#btn-buscar-cep').find('span').addClass('d-none');
        })

    })
})