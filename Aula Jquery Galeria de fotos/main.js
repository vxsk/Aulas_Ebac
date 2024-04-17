$(document).ready(function(){
    
    $('header button').click(function(){
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function(){
        $('form').slideUp();
    })

    $('form').on('submit', function(e){
        e.preventDefault();
        const novaImagem = $('#imagem-nova').val();
        const novoItem = $('<li style="display:none"></li>');
        $(`<img src="${novaImagem}" />`).appendTo(novoItem);
        $(`
            <div class="overlay-imagem-link">
                <a href="${novaImagem}" target="_blank" title="Ver imagem em tamanho real">
                    Ver imgem em tamanho real
                </a>
            </div>
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn();
        $('#imagem-nova').val('');
    })
})