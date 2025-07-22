
let open_menu = false
document.querySelector('#menu_btn').addEventListener('click', ()=>{
    menu = document.querySelector('#menu_list')
    if(!open_menu){
        menu.style.right = '0vw'
        document.getElementById('blur-overlay').style.opacity = '1';
        open_menu = !open_menu
    }else {
        menu.style.right = '-30vw'
        document.getElementById('blur-overlay').style.opacity = '0';
        open_menu = !open_menu

    }
})