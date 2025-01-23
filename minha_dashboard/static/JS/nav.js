var menu_item = document.querySelectorAll('.item_menu')

function select_link(){
    menu_item.forEach((item)=>
        item.classList.remove()
    )
}