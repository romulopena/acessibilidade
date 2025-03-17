document.addEventListener('DOMContentLoaded',function(){
    const aumentaFonteBotao = document.getElementById('aumentar-fonte');
    const diminuirFonteBotao = document.getElementById('diminuir-fonte');

    let tamanhoAtualFonte = 1;

    aumentaFonteBotao.addEventListener('click',function({
        tamanhoAtualFonte = tamanhoAtualFonte + 1;
    }))
})