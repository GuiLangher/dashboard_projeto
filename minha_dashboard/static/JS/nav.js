var menu_item = document.querySelectorAll('.item_menu') //pega todos os itens do meu HTML que tenham a classe "item_menu"


//função para selecionar os itens
function select_link(){
    menu_item.forEach((item)=> //forEach é um comando do JavaScript que percorre item por item como se fosse um for
        item.classList.remove('ativo') //Reomove dinamicamente a classe de um item
    )
    this.classList.add('ativo') 
} //toda essa função está removendo a classe ativo de um item que eu não cliquei e está adicionando a classe ativo a um item que eu cliquei

//Escutador de eventos. Ele sempre "Escuta" quando o usuario clica em um item
menu_item.forEach((item)=> //percorre novamente a variavel item, que nada mais que todas as classes item_menu juntas
    item.addEventListener('click', select_link) //verifica se algum desses item foi clicados, se for ele atribui a função select_link
)